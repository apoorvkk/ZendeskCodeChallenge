import requests


class ZCoreRequestManager:
    """
    Responsible for wrapping the Zendesk Core API and to communicate directly with it for any given request.
    It's aim is to fulfill the relevant http methods and convert received data into json format and also store
    the relevant request metadata such as authentication details and subdomain.
    For the purpose of this project, we have only written code for making get requests.
    """

    def __init__(self):
        """
        This constructor will store the relevant request metadata needed to make requests such as authentication
        details, headers and root domain.
        """

        from z_api import username, password, subdomain
        self._auth = (username, password)
        self._headers = {'Accept': 'application/json'}
        self._url = "https://{subdomain}.zendesk.com/api/v2/".format(subdomain=subdomain)

    def get(self, api_url="", query_params=None):
        """
        This will make a GET request to the given url with relevant parameters.
        :return: response data in json form.
        :param api_url: represents the portion of url that identifies the target resource (eg. 'tickets.json')
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
        """

        full_url = self._url + api_url

        response = requests.get(full_url, auth=self._auth, headers=self._headers, params=query_params)

        response.raise_for_status()

        return response.json()


