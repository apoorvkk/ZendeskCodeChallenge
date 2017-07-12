from .request_manager import ZCoreRequestManager


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
        See constructor of request_manager.ZRequestManager
        """

        super().__init__(subdomain=subdomain, username=username, password=password)

    def show_ticket(self, query_params=None, id=None):
        """
        This will show the details of a Zendesk ticket (eg. subject, description, requestor etc.).
        :return: dict
        :param id: ticket id
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
        """

        api_url = "tickets/{id}.json".format(id=id)
        return self._get_json_data(api_url=api_url, query_params=query_params)

    def list_tickets(self, query_params=None):
        """
        This will bulk list all the tickets and their relevant details in the Zendesk API.
        :return: dict
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
        """

        api_url = "tickets.json"
        return self._get_json_data(api_url=api_url, query_params=query_params)