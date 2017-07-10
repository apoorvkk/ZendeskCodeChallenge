
class ZAPIRequestException(Exception):
    pass


class ZAPIServerException(ZAPIRequestException):
    pass


class ZAPIClientException(ZAPIRequestException):
    pass


class ZUnprocessableResponseException(Exception):
    pass