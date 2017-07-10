from json import JSONDecodeError

import requests
import exceptions

class ZCoreRequestManager:
    """
    Responsible for wrapping the Zendesk Core API and to communicate directly with it for any given request.
    This means it manages the standard CRUD operations. For the purpose of this project,
    we have only written code for listing and detailing resources.
    """

    def __init__(self, subdomain="", username=None, password=None):
        # Make assertions about domain, username and password?

        self._auth = (username, password)
        self._headers = {'Accept':'application/json'}
        self._url = "https://{subdomain}.zendesk.com/api/v2/".format(subdomain=subdomain)

    def _get(self, api_url, params):
        full_url = self._url + api_url

        # Check for low level request exceptions such as ConnectionTimeout.
        response = requests.get(full_url, auth=self._auth, headers=self._headers, params=params)

        response.raise_for_status()

        content_type = response.headers.get('content-type', '')
        if "application/json" not in content_type and "text/plain" in content_type:
            raise requests.exceptions.HTTPError(response.content, response)

        return response

    def _fetch_json_data(self, api_url, params):
        try:
            response = self._get(api_url, params)
        except requests.exceptions.RequestException as req_err:
            raise exceptions.ZAPIRequestException("Unable to communicate with Zendesk's API.") from req_err

        except requests.exceptions.HTTPError as http_err:
            if 500 <= http_err.response.status_code < 600:
                raise exceptions.ZAPIServerException(str(http_err) + ". Unable to communicate with Zendesk\'s API due to internal server errors.") from http_err
            elif 400 <= http_err.response.status_code < 500:
                raise exceptions.ZAPIClientException(str(http_err) + ". Unable to proceed due to malformed requests") from http_err

        try:
            json_response = response.json()
        except (JSONDecodeError, TypeError) as format_err:
            raise exceptions.ZUnprocessableResponseException("Unable to process received request data.") from format_err

        return json_response

class ZTicketManager(ZCoreRequestManager):

    def __init__(self, subdomain, username, password):
        super().__init__(subdomain=subdomain, username=username, password=password)

    def show_ticket(self, params, id=-1):
        api_url = "tickets/{id}.json".format(id=id)
        return self._fetch_json_data(api_url, params)

    def show_tickets(self, params):
        api_url = "tickets.json"
        return self._fetch_json_data(api_url, params)

class ZCommentManager(ZCoreRequestManager):

    def __init__(self, subdomain, username, password):
        super().__init__(subdomain=subdomain, username=username, password=password)

    def list_comments(self, params, ticket_id=-1):
        api_url = "tickets/{id}/comments.json".format(id=ticket_id)
        return self._fetch_json_data(api_url, params)


if __name__ == "__main__":


