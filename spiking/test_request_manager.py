import unittest, mock

from ticket_requester import ZRequestManager

class RequestManagerTestCase(unittest.TestCase):

    def setUp(self):
        self.request_mgr = ZRequestManager(subdomain="homesrus", username="apoorv.k.kansal@gmail.com", password="ZenDeskChallenge15!9793")


    @mock.patch('ticket_requester.requests.get')
    def test_get_success(self, mock_get_req):
        mock_get_req.return_value = mock.Mock()
        mock_get_req.return_value.status_code = 200

        response = self.request_mgr._get("tickets.json")

        self.assertEqual(response.status_code, 200)
