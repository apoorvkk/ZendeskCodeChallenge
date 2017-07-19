from rest_framework.exceptions import APIException


class APIServerException(APIException):

    def __init__(self, status_code=500, default_detail='Server Error'):
        super().__init__(detail=default_detail)
        self.status_code = status_code


