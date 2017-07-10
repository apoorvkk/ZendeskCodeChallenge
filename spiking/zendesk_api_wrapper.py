from json import JSONDecodeError

import requests
import exceptions


class ZCoreRequestManager:
    """
    Responsible for wrapping the Zendesk Core API and to communicate directly with it for any given request.
    It's aim is to fufil the relevant http methods and convert received data into json format and also store
    the relevant request metadata such as authentication details and subdomain.
    For the purpose of this project, we have only written code for making get requests.
    """

    def __init__(self, subdomain="", username=None, password=None):
        """
        This constructor will store the relevant request metadata needed to make requests such as authentication
        details, headers and root domain.
        :param subdomain: represents the Zendesk user domain
        :param username: email of a Zendesk account
        :param password: password of a Zendesk account
        """

        self._auth = (username, password)
        self._headers = {'Accept':'application/json'}
        self._url = "https://{subdomain}.zendesk.com/api/v2/".format(subdomain=subdomain)

    def _get(self, api_url="", query_params=None):
        """
        This will make a GET request to the given url with relevant parameters.
        :return: requests.Response
        :raises: requests.exceptions.RequestException, requests.exceptions.HTTPError
        :param api_url: represents the portion of url that identifies the target resource (eg. 'tickets.json')
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
        """

        full_url = self._url + api_url
        response = requests.get(full_url, auth=self._auth, headers=self._headers, query_params=query_params)

        response.raise_for_status()

        content_type = response.headers.get('content-type', '')
        if "application/json" not in content_type and "text/plain" in content_type:
            raise requests.exceptions.HTTPError(response.content, response)

        return response

    def _get_json_data(self, api_url="", query_params=None):
        """
        This will make a GET request and return the JSON form of it.
        :return: dict
        :raises: exceptions.ZAPIRequestException, exceptions.ZAPIServerException, exceptions.ZAPIClientException
        :param api_url: represents the portion of url that identifies the target resource (eg. 'tickets.json')
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
        """

        try:
            response = self._get(api_url, query_params)
        except requests.exceptions.RequestException as req_err:
            raise exceptions.ZAPIRequestException("Unable to communicate with Zendesk's API.") from req_err
        except requests.exceptions.HTTPError as http_err:
            if 500 <= http_err.response.status_code < 600:
                raise exceptions.ZAPIServerException(
                    "{0}. Unable to communicate with Zendesk\'s API due to internal server errors.".format(
                        str(http_err))) from http_err
            elif 400 <= http_err.response.status_code < 500:
                raise exceptions.ZAPIClientException(str(http_err) + ". Unable to proceed due to malformed requests") \
                    from http_err

        try:
            json_response = response.json()
        except (JSONDecodeError, TypeError) as format_err:
            raise exceptions.ZUnprocessableResponseException("Unable to process received request data.") from format_err

        return json_response


class ZTicketManager(ZCoreRequestManager):
    """
    Responsible for managing the ticket resource outlined:
    https://developer.zendesk.com/rest_api/docs/core/tickets

    Essentially, the class should implement all actions possible on the Ticket resource
    by constructing the relevant urls and making the relevant http method requests needed.

    For this project, the "List Tickets" (https://developer.zendesk.com/rest_api/docs/core/tickets#list-tickets)
    and "Show Ticket" (https://developer.zendesk.com/rest_api/docs/core/tickets#show-ticket) actions have been supported.
    """

    def __init__(self, subdomain, username, password):
        """
        See constructor of ZRequestManager.
        """

        super().__init__(subdomain=subdomain, username=username, password=password)

    def show_ticket(self, query_params=None, id=-1):
        """
        This will show the details of a Zendesk ticket (eg. subject, description, requestor etc.)
        :return: dict
        :param id: ticket id
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
        """

        api_url = "tickets/{id}.json".format(id=id)
        return self._get_json_data(api_url, query_params)

    def show_tickets(self, query_params):
        """
        This will bulk list all the tickets and their relevant details in the Zendesk API.
        :return: dict
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
        """
        api_url = "tickets.json"
        return self._get_json_data(api_url, query_params)


class ZCommentManager(ZCoreRequestManager):
    """
    Responsible for managing the ticket resource outlined:
    https://developer.zendesk.com/rest_api/docs/core/ticket_comments

    Essentially, the class should implement all actions possible on the Comments resource
    by constructing the relevant urls and making the relevant http method requests needed.

    For this project, the "List Comments" (https://developer.zendesk.com/rest_api/docs/core/ticket_comments#list-comments)
    actions have been supported.
    """

    def __init__(self, subdomain, username, password):
        """
        See constructor of ZRequestManager.
        """

        super().__init__(subdomain=subdomain, username=username, password=password)

    def list_comments(self, query_params, ticket_id=-1):
        """
        This will bulk list all the ticket comments (conversation) for a given ticket in the Zendesk API.
        :return: dict
        :param id: ticket id
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
        """

        api_url = "tickets/{id}/comments.json".format(id=ticket_id)
        return self._get_json_data(api_url, query_params)
