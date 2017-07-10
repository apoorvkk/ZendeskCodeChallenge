import requests

class ZCoreRequestManager:
    '''
    Responsible for wrapping the Zendesk Core API and to communicate directly with it for any given request.
    This means it manages the standard CRUD operations. For the purpose of this project,
    we have only written code for listing and detailing resources.
    '''

    def __init__(self, subdomain="", username=None, password=None):
        # Make assertions about domain, username and password?

        self._auth = (username, password)
        self._headers = {'Accept':'application/json'}
        self._url = "https://{subdomain}.zendesk.com/api/v2/".format(subdomain=subdomain)

    def _get(self, resource_uri):
        full_url = self._url + resource_uri
        response = requests.get(full_url, auth=self._auth, headers=self._headers)

        return response

    def check_api_status(self):
        pass
