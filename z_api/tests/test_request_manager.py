from z_api import ZCoreRequestManager
from unittest import mock
import unittest
import requests


@mock.patch('requests.get')
class TestGetRequest(unittest.TestCase):

    def setUp(self):
        self.request_mgr = ZCoreRequestManager(subdomain="homesrus-aus", username="apoorv.k.kansal@gmail.com",
                                               password="ZenDeskChallenge15!9793")

    def test_requests_get_called(self, mock_get_req):
        mock_get_req.return_value = mock.Mock(status_code=200, headers={"content-type": "application/json"})

        self.request_mgr._get("tickets.json")

        mock_get_req.assert_called()

    def test_success_get(self, mock_get_req):
        mock_get_req.return_value = mock.Mock(status_code=200, headers={"content-type": "application/json"})

        response = self.request_mgr._get("tickets.json")

        self.assertEqual(response.status_code, 200)

    def test_correct_url_requested(self, mock_get_req):
        full_url = "https://homesrus-aus.zendesk.com/api/v2/tickets/2/comments.json"
        mock_get_req.return_value = mock.Mock(status_code=200, headers={"content-type": "application/json"},
                                              url=full_url)

        response = self.request_mgr._get("tickets/2/comments.json")
        self.assertEqual(response.url, full_url)

    def test_http_error_not_found(self, mock_get_req):
        mock_get_req.return_value = mock.Mock(status_code=404)
        mock_get_req.return_value.raise_for_status.side_effect = \
            requests.exceptions.HTTPError("Not found.", response=mock_get_req.return_value)

        self.assertRaises(requests.exceptions.HTTPError, self.request_mgr._get, "non-existent-resource.json")

        try:
            response = self.request_mgr._get("non-existent-resource.json")
            self.assertIsNone(response)
        except requests.exceptions.HTTPError as err:
            self.assertEquals(err.response.status_code, 404)

    def test_http_error_service_unavailable(self, mock_get_req):
        mock_get_req.return_value = mock.Mock(status_code=503)
        mock_get_req.return_value.raise_for_status.side_effect = \
            requests.exceptions.HTTPError("Server error.", response=mock_get_req.return_value)

        self.assertRaises(requests.exceptions.HTTPError, self.request_mgr._get, "non-existent-resource.json")

        try:
            response = self.request_mgr._get("non-existent-resource.json")
            self.assertIsNone(response)
        except requests.exceptions.HTTPError as err:
            self.assertEquals(err.response.status_code, 503)

    def test_request_exception(self, mock_get_req):















    # def test_get_received_plain_txt(self, mock_get_req):
    #     mock_get_req.return_value = mock.Mock()
    #     mock_get_req.return_value.raise_for_status.side_effect = requests.exceptions.HTTPError("Not found.")
    #
    #     self.assertRaises(requests.exceptions.HTTPError, self.request_mgr._get, "non-existent-resource.json")
    #

    # def test_output_is_same_in_json(self, mock_get_req):
    #     sample_json_response = {
    #       "item": {
    #         "id": 123,
    #         "url": "https://{subdomain}.zendesk.com/api/v2/items/123.json",
    #         "name": "Wibble",
    #         "created_at": "2012-04-04T09:14:57Z"
    #       }
    #     }
    #
    #     mock_get_req.return_value = mock.Mock(status_code=200, headers={"content-type": "application/json"})
    #     mock_get_req.return_value.json.return_value = sample_json_response
    #
    #     self.request_mgr._get("tickets/2.json")
    #     self.assertEqual(mock_get_req.return_value.json(), sample_json_response)



