import json
import requests
import z_api
import unittest
from unittest import mock


@mock.patch('z_api.ZCoreRequestManager.get')
class TestShowTicket(unittest.TestCase):
    def setUp(self):
        z_api.username = "apoorv.k.kansal@gmail.com"
        z_api.password = "ZenDeskChallenge15!9793"
        z_api.subdomain = "homesrus-aus"

    def test_show_existing_ticket(self, mock_core_req_getter):
        with open('z_api/tests/test_data/single_ticket.json') as ticket_file:
            mock_core_req_getter.return_value = json.load(ticket_file)

        ticket_obj = z_api.ZTicket.show_ticket(105)

        # Check if ZTicket object was created.
        self.assertEqual(isinstance(ticket_obj, z_api.ZTicket), True)

        # Check some major contents of the object.
        self.assertEqual(ticket_obj.id, 105)
        self.assertEqual(ticket_obj.subject, 'Problems in buying homes')
        self.assertEqual(ticket_obj.status, 'pending')
        self.assertEqual(isinstance(ticket_obj.requester, z_api.ZUser), True)
        self.assertEqual(isinstance(ticket_obj.submitter, z_api.ZUser), True)
        self.assertEqual(ticket_obj.requester.name, "Vimal Kansal")

    def test_invalid_ticket(self, mock_core_req_getter):
        mock_core_req_getter.side_effect = requests.exceptions.HTTPError("Ticket not found.")
        self.assertRaises(requests.exceptions.HTTPError, z_api.ZTicket.show_ticket, "some_fake_ticket_id")


@mock.patch('z_api.ZCoreRequestManager.get')
class TestListTickets(unittest.TestCase):
    def setUp(self):
        z_api.username = "apoorv.k.kansal@gmail.com"
        z_api.password = "ZenDeskChallenge15!9793"
        z_api.subdomain = "homesrus-aus"

    def test_list_existing_tickets(self, mock_core_req_getter):
        with open('z_api/tests/test_data/many_tickets.json') as ticket_file:
            mock_core_req_getter.return_value = json.load(ticket_file)

        ticket_objs, total_tickets = z_api.ZTicket.list_tickets(1)
        # Check if ZTicket objects were created.
        for ticket_obj in ticket_objs:

            self.assertEqual(isinstance(ticket_obj, z_api.ZTicket), True)

            # Check some major contents of the object.
            self.assertEqual(isinstance(ticket_obj.requester, z_api.ZUser), True)
            self.assertEqual(isinstance(ticket_obj.submitter, z_api.ZUser), True)

            self.assertEqual(hasattr(ticket_obj.requester, 'name'), True)
            self.assertEqual(hasattr(ticket_obj.submitter, 'name'), True)
            self.assertEqual(hasattr(ticket_obj, 'id'), True)
            self.assertEqual(hasattr(ticket_obj, 'subject'), True)
            self.assertEqual(hasattr(ticket_obj, 'status'), True)

        self.assertEqual(total_tickets, 103)

    def test_invalid_page(self, mock_core_req_getter):
        mock_core_req_getter.side_effect = requests.exceptions.HTTPError("Invalid page.")
        self.assertRaises(requests.exceptions.HTTPError, z_api.ZTicket.list_tickets, "some_fake_page")
