from unittest import mock
import unittest

import requests

from ticket_requester import ZCoreRequestManager


@mock.patch('ticket_requester.requests.get')
class RequestManagerTestCase(unittest.TestCase):

    def setUp(self):
        self.request_mgr = ZCoreRequestManager(subdomain="homesrus-aus", username="apoorv.k.kansal@gmail.com",
                                               password="ZenDeskChallenge15!9793")

    def test_get_success(self, mock_get_req):

        mock_get_req.return_value = mock.Mock()
        mock_get_req.return_value.status_code = 200
        mock_get_req.return_value.headers = {'content-type': 'application/json'}

        response = self.request_mgr._get("tickets.json")

        self.assertEqual(response.status_code, 200)

    def test_get_not_found(self, mock_get_req):

        mock_get_req.return_value = mock.Mock(status=404)
        mock_get_req.return_value.raise_for_status.side_effect = requests.exceptions.HTTPError("Not found.")

        self.assertRaises(requests.exceptions.HTTPError, self.request_mgr._get, "non-existent-resource.json")

    def test_get_received_plain_txt(self, mock_get_req):
        mock_get_req.return_value = mock.Mock()
        mock_get_req.return_value.raise_for_status.side_effect = requests.exceptions.HTTPError("Not found.")

        self.assertRaises(requests.exceptions.HTTPError, self.request_mgr._get, "non-existent-resource.json")






