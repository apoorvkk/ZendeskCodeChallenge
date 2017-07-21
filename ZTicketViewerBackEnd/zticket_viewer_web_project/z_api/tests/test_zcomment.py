import json
import requests
import z_api
from unittest import mock
import unittest


@mock.patch('z_api.ZCoreRequestManager.get')
class TestListComments(unittest.TestCase):
    def setUp(self):
        z_api.username = "apoorv.k.kansal@gmail.com"
        z_api.password = "ZenDeskChallenge15!9793"
        z_api.subdomain = "homesrus-aus"

    def test_get_existing_comments(self, mock_core_req_getter):
        with open('z_api/tests/test_data/many_comments.json') as comment_file:
            mock_core_req_getter.return_value = json.load(comment_file)

        comment_objs, total_comments = z_api.ZComment.list_comments(105, 1)

        # Check if ZComment objects were created.
        for comment_obj in comment_objs:

            self.assertEqual(isinstance(comment_obj, z_api.ZComment), True)

            # Check some major contents of the object.
            self.assertEqual(isinstance(comment_obj.author, z_api.ZUser), True)

            self.assertEqual(hasattr(comment_obj.author, 'name'), True)
            self.assertEqual(hasattr(comment_obj, 'id'), True)
            self.assertEqual(hasattr(comment_obj, 'body'), True)
            self.assertEqual(hasattr(comment_obj, 'created_at'), True)

        self.assertEquals(total_comments, 4)

    def test_invalid_page(self, mock_core_req_getter):
        mock_core_req_getter.side_effect = requests.exceptions.HTTPError("Invalid page.")
        self.assertRaises(requests.exceptions.HTTPError, z_api.ZComment.list_comments, 100, "some_fake_page")

    def test_invalid_ticket(self, mock_core_req_getter):
        mock_core_req_getter.side_effect = requests.exceptions.HTTPError("Ticket not found.")
        self.assertRaises(requests.exceptions.HTTPError, z_api.ZComment.list_comments, "some_fake_ticket_id", 2)
