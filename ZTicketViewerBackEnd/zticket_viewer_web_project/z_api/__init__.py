# Package configuration details.
username = None
password = None
subdomain = ""

from .resources import (
    ZComment,
    ZTicket,
    ZUser,
    ZAttachment
)

from .request_manager import ZCoreRequestManager