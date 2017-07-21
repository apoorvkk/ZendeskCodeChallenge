from unittest.mock import Mock
from unittest import mock
from django.test import TestCase
from django.test import Client
import requests
import urllib.parse
import z_api


from rest_framework.reverse import reverse

client = Client()


@mock.patch('z_api.ZTicket.list_tickets')
class TestListTicketsView(TestCase):

    def setUp(self):
        z_api.username = "apoorv.k.kansal@gmail.com"
        z_api.password = "ZenDeskChallenge15!9793"
        z_api.subdomain = "homesrus-aus"

    def test_get_existing_tickets(self, mock_list_tickets):
        first_page_tickets = [
            z_api.ZTicket(id=10,
                          channel="web",
                          created_at="2017-07-15T06:08:25Z",
                          subject="I need some homes.",
                          description="Buying a home.",
                          status="open",
                          requester=z_api.ZUser(id=1022, name="James Fish", email="james@fish.com"),
                          submitter=z_api.ZUser(id=1022, name="James Fish", email="james@fish.com"),
                          assignee=z_api.ZUser(id=114273319939, name="Apoorv Kansal", email="apoorv.k.kansal@gmail.com")
                          ),
            z_api.ZTicket(id=11,
                          channel="api",
                          created_at="2017-07-14T06:08:25Z",
                          subject="Help home burning.",
                          description="My home is destroyed :(",
                          status="pending",
                          requester=z_api.ZUser(id=1032, name="Sally Fish", email="sally@fish.com"),
                          submitter=z_api.ZUser(id=1022, name="Sally Fish", email="sally@fish.com"),
                          assignee=z_api.ZUser(id=114273319939, name="Apoorv Kansal", email="apoorv.k.kansal@gmail.com")
                          ),
            z_api.ZTicket(id=12,
                          channel="web",
                          created_at="2017-07-13T06:08:25Z",
                          subject="Selling homes.",
                          description="It's time to move on so I shall sell my homes today.",
                          status="open",
                          requester=z_api.ZUser(id=10672, name="Grass Hopper", email="grass@hops.com"),
                          submitter=z_api.ZUser(id=1022, name="Grass Hopper", email="grass@hops.com"),
                          assignee=z_api.ZUser(id=114273319939, name="Apoorv Kansal", email="apoorv.k.kansal@gmail.com")
                          )
        ]

        total_tickets = 100

        mock_list_tickets.return_value = [first_page_tickets, total_tickets]

        response = client.get('{}?{}'.format(
            reverse('list-tickets'),
            urllib.parse.urlencode({'page': 1})
        ))

        # Check status code of response to be 200
        self.assertEquals(response.status_code, 200)
        # Check json data returned is the expected json data.
        expected_json_output = {'tickets': [
            {'id': 10, 'channel': 'web', 'created_at': '2017-07-15T06:08:25Z', 'subject': 'I need some homes.',
             'description': 'Buying a home.', 'status': 'open',
             'requester': {'id': 1022, 'name': 'James Fish', 'email': 'james@fish.com'},
             'submitter': {'id': 1022, 'name': 'James Fish', 'email': 'james@fish.com'},
             'assignee': {'id': 114273319939, 'name': 'Apoorv Kansal', 'email': 'apoorv.k.kansal@gmail.com'}},
            {'id': 11, 'channel': 'api', 'created_at': '2017-07-14T06:08:25Z', 'subject': 'Help home burning.',
             'description': 'My home is destroyed :(', 'status': 'pending',
             'requester': {'id': 1032, 'name': 'Sally Fish', 'email': 'sally@fish.com'},
             'submitter': {'id': 1022, 'name': 'Sally Fish', 'email': 'sally@fish.com'},
             'assignee': {'id': 114273319939, 'name': 'Apoorv Kansal', 'email': 'apoorv.k.kansal@gmail.com'}},
            {'id': 12, 'channel': 'web', 'created_at': '2017-07-13T06:08:25Z', 'subject': 'Selling homes.',
             'description': "It's time to move on so I shall sell my homes today.", 'status': 'open',
             'requester': {'id': 10672, 'name': 'Grass Hopper', 'email': 'grass@hops.com'},
             'submitter': {'id': 1022, 'name': 'Grass Hopper', 'email': 'grass@hops.com'},
             'assignee': {'id': 114273319939, 'name': 'Apoorv Kansal', 'email': 'apoorv.k.kansal@gmail.com'}}],
            'count': 100}
        self.assertEquals(expected_json_output, response.data)

    def test_server_error_with_plain_text_response_from_zendesk(self, mock_list_tickets):
        zendesk_response = Mock(headers={'content-type': 'text/plain'}, status_code=500,
                                content='There seems to be an internal server issue.')
        mock_list_tickets.side_effect = requests.exceptions.HTTPError(response=zendesk_response)

        response = client.get('{}?{}'.format(
            reverse('list-tickets'),
            urllib.parse.urlencode({'page': 1})
        ))

        # Check status code of response to be 500
        self.assertEquals(response.status_code, 500)
        # Check json data returned is the expected json data.
        expected_json_output = {'detail': '(STATUS 500): There seems to be an internal server issue.'}
        self.assertEquals(expected_json_output, response.data)

    def test_bad_request_with_json_response_from_zendesk(self, mock_list_tickets):
        # Provide incorrect username/password
        z_api.username = "fake_email@email.com"
        z_api.password = "fake_password"
        zendesk_response = Mock(headers={'content-type': 'application/json'}, status_code=401)
        zendesk_response.json.return_value = {
            "error": "Couldn't authenticate you"
        }
        mock_list_tickets.side_effect = requests.exceptions.HTTPError(response=zendesk_response)

        response = client.get('{}?{}'.format(
            reverse('list-tickets'),
            urllib.parse.urlencode({'page': '232'})
        ))

        # Check status code of response to be 500
        self.assertEquals(response.status_code, 500)
        # Check json data returned is the expected json data.
        expected_json_output = {'error': "Couldn't authenticate you", 'status': '401'}
        self.assertEquals(expected_json_output, response.data)

    def test_low_level_server_error(self, mock_list_tickets):
        mock_list_tickets.side_effect = requests.exceptions.RequestException('Internal server error.')

        response = client.get('{}?{}'.format(
            reverse('list-tickets'),
            urllib.parse.urlencode({'page': 1})
        ))

        # Check status code of response to be 500
        self.assertEquals(response.status_code, 500)
        # Check json data returned is the expected json data.
        expected_json_output = {'detail': 'Internal server error.'}
        self.assertEquals(expected_json_output, response.data)
