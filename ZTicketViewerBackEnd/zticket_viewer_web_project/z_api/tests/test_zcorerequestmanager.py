import z_api
from unittest import mock
import unittest
import requests


@mock.patch('requests.get')
class TestGetRequest(unittest.TestCase):

    def setUp(self):
        z_api.username = "apoorv.k.kansal@gmail.com"
        z_api.password = "ZenDeskChallenge15!9793"
        z_api.subdomain = "homesrus-aus"
        self.request_mgr = z_api.ZCoreRequestManager()

    def test_expected_json_output(self, mock_get_req):
        expected_json = {
            "id": 101,
            "requester_id": 3456789,
            "status": "open"
        }
        mock_get_req.return_value.json.return_value = expected_json
        output = self.request_mgr.get("tickets.json", {"page": 1})
        self.assertEqual(expected_json, output)

    def test_error_in_bad_url(self, mock_get_req):
        mock_get_req.return_value = mock.Mock(status_code=404)
        mock_get_req.return_value.raise_for_status.side_effect = requests.exceptions.HTTPError(
            "Not found.", response=mock_get_req.return_value)
        self.assertRaises(requests.exceptions.HTTPError, self.request_mgr.get, "non-existent-resource.json",
                          {"page": 1})

    def test_error_in_incorrect_credentials(self, mock_get_req):
        z_api.username = "some_wrong_email@email.com"
        z_api.password = "some_wrong_password"
        z_api.subdomain = "homesrus-aus"
        mock_get_req.return_value = mock.Mock(status_code=401)
        mock_get_req.return_value.raise_for_status.side_effect = requests.exceptions.HTTPError(
            "Cannnot authenticate you.", response=mock_get_req.return_value)
        self.assertRaises(requests.exceptions.HTTPError, self.request_mgr.get, "tickets.json")

    def test_error_in_incorrect_subdomain(self, mock_get_req):
        z_api.username = "apoorv.k.kansal@gmail.com"
        z_api.password = "ZenDeskChallenge15!9793"
        z_api.subdomain = "some_wrong_domain"
        mock_get_req.return_value = mock.Mock(status_code=404)
        mock_get_req.return_value.raise_for_status.side_effect = requests.exceptions.HTTPError(
            "Not found.", response=mock_get_req.return_value)
        self.assertRaises(requests.exceptions.HTTPError, self.request_mgr.get, "tickets.json")
