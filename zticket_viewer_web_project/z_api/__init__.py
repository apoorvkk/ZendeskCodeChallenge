username = None
password = None
subdomain = ""

from .resources import (
    ZComment,
    ZTicket,
    ZUser,
    ZAttachment
)
from .exceptions import (
    ZAPIRequestException,
    ZAPIServerException,
    ZAPIClientException,
    ZUnprocessableResponseException
)