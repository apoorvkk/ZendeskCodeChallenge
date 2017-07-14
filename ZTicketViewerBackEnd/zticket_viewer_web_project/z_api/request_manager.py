from json import JSONDecodeError
from .exceptions import (
    ZAPIRequestException,
    ZAPIServerException,
    ZAPIClientException,
    ZUnprocessableResponseException
)

import requests


class ZCoreRequestManager:
    """
    Responsible for wrapping the Zendesk Core API and to communicate directly with it for any given request.
    It's aim is to fufil the relevant http methods and convert received data into json format and also store
    the relevant request metadata such as authentication details and subdomain.
    For the purpose of this project, we have only written code for making get requests.
    """

    def __init__(self):
        """
        This constructor will store the relevant request metadata needed to make requests such as authentication
        details, headers and root domain.
        """

        from z_api import username, password, subdomain
        # MAKE ASSERTION ABOUT USERNAME, PASSWORD AND SUBDOMAIN REQUIRED.
        self._auth = (username, password)
        self._headers = {'Accept': 'application/json'}
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
        response = requests.get(full_url, auth=self._auth, headers=self._headers, params=query_params)

        response.raise_for_status()

        return response

    def get_json_data(self, api_url="", query_params=None):
        """
        This will make a GET request and return the JSON form of it.
        :return: dict
        :raises: exceptions.ZAPIRequestException, exceptions.ZAPIServerException, exceptions.ZAPIClientException
        :param api_url: represents the portion of url that identifies the target resource (eg. 'tickets.json')
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
        """

        try:
            response = self._get(api_url=api_url, query_params=query_params)

            content_type = response.headers.get('content-type', '')
            if "application/json" not in content_type and "text/plain" in content_type:
                raise requests.exceptions.HTTPError(response.content, response)

        except requests.exceptions.HTTPError as http_err:

            if 500 <= http_err.response.status_code < 600:
                raise ZAPIServerException(
                    "{0}. Unable to communicate with Zendesk\'s API due to internal server errors.".format(
                        str(http_err))) from http_err
            elif 400 <= http_err.response.status_code < 500:
                raise ZAPIClientException(str(http_err.response.json())) from http_err

        except requests.exceptions.RequestException as req_err:
            raise ZAPIRequestException("Unable to successfully communicate with Zendesk's API.") from req_err

        try:
            json_response = response.json()
        except (JSONDecodeError, TypeError) as format_err:
            raise ZUnprocessableResponseException("Unable to process received request data.") from format_err

        return json_response
