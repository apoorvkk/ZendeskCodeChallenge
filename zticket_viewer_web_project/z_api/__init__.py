username = None
password = None
subdomain = ""

from .z_resources import (
    ZComment,
    ZTicket
)
from .exceptions import (
    ZAPIRequestException,
    ZAPIServerException,
    ZAPIClientException,
    ZUnprocessableResponseException
)