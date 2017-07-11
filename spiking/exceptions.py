
class ZAPIRequestException(Exception):
    """
    Represents a low level API exception. This could be due to connection time out, not using SSL etc.
    """

    pass


class ZAPIServerException(ZAPIRequestException):
    """
    An internal server error happened. This might happen on Zendesk's side or on this side.
    This exception is usually thrown for the HTTP status codes 5XX.
    """

    pass


class ZAPIClientException(ZAPIRequestException):
    """
    The client has provided malformed request data and as such, the Zendesk API potentially returns business/api level
    errors. This exception is usually thrown for the HTTP status codes 4XX.
    """

    pass


class ZUnprocessableResponseException(Exception):
    """
    Used when the received response from Zendesk cannot be processed/converted into the relevant data format (eg. JSON).
    """

    pass
