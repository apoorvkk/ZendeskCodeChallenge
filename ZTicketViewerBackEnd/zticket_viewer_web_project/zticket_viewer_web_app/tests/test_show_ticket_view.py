from unittest.mock import Mock
from unittest import mock
from django.test import TestCase
from django.test import Client
from rest_framework.reverse import reverse
import requests
import z_api


client = Client()


@mock.patch('z_api.ZTicket.show_ticket')
class TestShowTicketView(TestCase):

    def setUp(self):
        z_api.username = "apoorv.k.kansal@gmail.com"
        z_api.password = "ZenDeskChallenge15!9793"
        z_api.subdomain = "homesrus-aus"

    def test_get_existing_tickets(self, mock_show_ticket):
        ticket = z_api.ZTicket(id=10,
                               channel="web",
                               created_at="2017-07-15T06:08:25Z",
                               subject="I need some homes.",
                               description="Buying a home.",
                               status="open",
                               requester=z_api.ZUser(id=1022, name="James Fish", email="james@fish.com"),
                               submitter=z_api.ZUser(id=1022, name="James Fish", email="james@fish.com"),
                               assignee=z_api.ZUser(id=114273319939, name="Apoorv Kansal",
                                                    email="apoorv.k.kansal@gmail.com")
                               )

        mock_show_ticket.return_value = ticket

        response = client.get(reverse('show-ticket', kwargs={'id': 10}))

        # Check status code of response to be 200
        self.assertEquals(response.status_code, 200)

        # Check json data returned is the expected json data.
        expected_json_output = {'id': 10, 'channel': 'web', 'created_at': '2017-07-15T06:08:25Z',
                                'subject': 'I need some homes.', 'description': 'Buying a home.', 'status': 'open',
                                'requester': {'id': 1022, 'name': 'James Fish', 'email': 'james@fish.com'},
                                'submitter': {'id': 1022, 'name': 'James Fish', 'email': 'james@fish.com'},
                                'assignee': {'id': 114273319939, 'name': 'Apoorv Kansal',
                                             'email': 'apoorv.k.kansal@gmail.com'}}
        self.assertEquals(expected_json_output, response.data)

    def test_server_error_with_plain_text_response_from_zendesk(self, mock_show_ticket):
        zendesk_response = Mock(headers={'content-type': 'text/plain'}, status_code=500,
                                content='There seems to be an internal server issue.')
        mock_show_ticket.side_effect = requests.exceptions.HTTPError(response=zendesk_response)

        response = client.get(reverse('show-ticket', kwargs={'id': 10}))

        # Check status code of response to be 500
        self.assertEquals(response.status_code, 500)

        # Check json data returned is the expected json data.
        expected_json_output = {'detail': '(STATUS 500): There seems to be an internal server issue.'}
        self.assertEquals(expected_json_output, response.data)

    def test_bad_request_with_json_response_from_zendesk(self, mock_show_ticket):
        # Provide incorrect username/password
        zendesk_response = Mock(headers={'content-type': 'application/json'}, status_code=400)
        zendesk_response.json.return_value = {
            "error": "Ticket not found."
        }
        mock_show_ticket.side_effect = requests.exceptions.HTTPError(response=zendesk_response)

        response = client.get(reverse('show-ticket', kwargs={'id': 10}))

        # Check status code of response to be 500
        self.assertEquals(response.status_code, 500)

        # Check json data returned is the expected json data.
        expected_json_output = {'error': 'Ticket not found.', 'status': '400'}
        self.assertEquals(expected_json_output, response.data)

    def test_low_level_server_error(self, mock_show_ticket):
        mock_show_ticket.side_effect = requests.exceptions.RequestException('Internal server error.')

        response = client.get(reverse('show-ticket', kwargs={'id': 1033}))

        # Check status code of response to be 500
        self.assertEquals(response.status_code, 500)

        # Check json data returned is the expected json data.
        expected_json_output = {'detail': 'Internal server error.'}
        self.assertEquals(expected_json_output, response.data)
