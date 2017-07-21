from unittest.mock import Mock
from unittest import mock
from django.test import TestCase
from django.test import Client
from rest_framework.reverse import reverse
import requests
import urllib.parse
import z_api

client = Client()


@mock.patch('z_api.ZComment.list_comments')
class TestListCommentsView(TestCase):

    def setUp(self):
        z_api.username = "apoorv.k.kansal@gmail.com"
        z_api.password = "ZenDeskChallenge15!9793"
        z_api.subdomain = "homesrus-aus"

    def test_get_existing_comments(self, mock_list_comments):
        first_page_comments = [
            z_api.ZComment(id=10,
                           type="Comment",
                           body="A really BIG home.",
                           channel="web",
                           created_at="2017-07-15T06:19:41Z",
                           author=z_api.ZUser(id=114273319939, name="Apoorv Kansal")),
            z_api.ZComment(id=102,
                           type="Comment",
                           body="Okay yes what are you after?",
                           channel="web",
                           created_at="2017-07-15T06:06:41Z",
                           author=z_api.ZUser(id=114273311932, name="Vimal Kansal")),
            z_api.ZComment(id=14,
                           type="Comment",
                           body="I need help in home making.",
                           channel="api",
                           created_at="2017-07-14T06:06:41Z",
                           author=z_api.ZUser(id=114273379932, name="Rita Kansal"),
                           attachments=[z_api.ZAttachment(id=982,
                                                          content_url="https://homesrus-aus.zendesk.com/attachments/token/07rnDsQPHFvf1npZcElWc6GWu/?name=photo.jpg")])
        ]

        total_comments = 10

        mock_list_comments.return_value = [first_page_comments, total_comments]

        response = client.get('{}?{}'.format(
            reverse('list-comments', kwargs={'ticket_id': 1}),
            urllib.parse.urlencode({'page': 1})
        ))

        # Check status code of response to be 200
        self.assertEquals(response.status_code, 200)
        # Check json data returned is the expected json data.
        expected_json_output = {'comments': [
            {'id': 10, 'type': 'Comment', 'body': 'A really BIG home.', 'channel': 'web',
             'created_at': '2017-07-15T06:19:41Z', 'author': {'id': 114273319939, 'name': 'Apoorv Kansal'}},
            {'id': 102, 'type': 'Comment', 'body': 'Okay yes what are you after?', 'channel': 'web',
             'created_at': '2017-07-15T06:06:41Z', 'author': {'id': 114273311932, 'name': 'Vimal Kansal'}},
            {'id': 14, 'type': 'Comment', 'body': 'I need help in home making.', 'channel': 'api',
             'created_at': '2017-07-14T06:06:41Z', 'author': {'id': 114273379932, 'name': 'Rita Kansal'},
             'attachments': [{'id': 982,
                              'content_url': 'https://homesrus-aus.zendesk.com/attachments/token/07rnDsQPHFvf1npZcElWc6GWu/?name=photo.jpg'}]}],
            'count': 10}
        self.assertEquals(expected_json_output, response.data)

    def test_server_error_with_plain_text_response_from_zendesk(self, mock_list_comments):
        zendesk_response = Mock(headers={'content-type': 'text/plain'}, status_code=500,
                                content='There seems to be an internal server issue.')
        mock_list_comments.side_effect = requests.exceptions.HTTPError(response=zendesk_response)

        response = client.get('{}?{}'.format(
            reverse('list-comments', kwargs={'ticket_id': 134}),
            urllib.parse.urlencode({'page': 1})
        ))

        # Check status code of response to be 500
        self.assertEquals(response.status_code, 500)
        # Check json data returned is the expected json data.
        expected_json_output = {'detail': '(STATUS 500): There seems to be an internal server issue.'}
        self.assertEquals(expected_json_output, response.data)

    def test_bad_request_with_json_response_from_zendesk(self, mock_list_comments):
        zendesk_response = Mock(headers={'content-type': 'application/json'}, status_code=400)
        zendesk_response.json.return_value = {
            "error": "Ticket not found."
        }
        mock_list_comments.side_effect = requests.exceptions.HTTPError(response=zendesk_response)

        response = client.get('{}?{}'.format(
            reverse('list-comments', kwargs={'ticket_id': 100000023}),
            urllib.parse.urlencode({'page': '232d'})
        ))

        # Check status code of response to be 500
        self.assertEquals(response.status_code, 500)
        # Check json data returned is the expected json data.
        expected_json_output = {'error': 'Ticket not found.', 'status': '400'}
        self.assertEquals(expected_json_output, response.data)

    def test_low_level_server_error(self, mock_list_comments):
        mock_list_comments.side_effect = requests.exceptions.RequestException('Internal server error.')

        response = client.get('{}?{}'.format(
            reverse('list-comments', kwargs={'ticket_id': 134}),
            urllib.parse.urlencode({'page': 1})
        ))

        # Check status code of response to be 500
        self.assertEquals(response.status_code, 500)
        # Check json data returned is the expected json data.
        expected_json_output = {'detail': 'Internal server error.'}
        self.assertEquals(expected_json_output, response.data)
