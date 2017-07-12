from .request_manager import ZCoreRequestManager


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
        See constructor of request_manager.ZRequestManager
        """

        super().__init__(subdomain=subdomain, username=username, password=password)

    def list_comments(self, query_params=None, ticket_id=None):
        """
        This will bulk list all the ticket comments (conversation) for a given ticket in the Zendesk API.
        :return: dict
        :param ticket_id: the ticket that will be used to get the associated comments.
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
        """

        api_url = "tickets/{id}/comments.json".format(id=ticket_id)
        return self._get_json_data(api_url=api_url, query_params=query_params)