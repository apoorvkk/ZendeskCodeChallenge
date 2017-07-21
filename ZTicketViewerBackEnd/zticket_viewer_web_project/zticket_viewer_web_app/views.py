from django.conf import settings
from rest_framework import status
from rest_framework import exceptions
from rest_framework.response import Response
from rest_framework.decorators import api_view
import z_api
import requests

z_api.username = settings.Z_USERNAME
z_api.password = settings.Z_PASSWORD
z_api.subdomain = settings.Z_SUBDOMAIN


@api_view(['GET'])
def show_ticket(request, id):
    """
    This function based view will return ticket details of a specific ticket stored at Zendesk.
    :param request: rest_framework.response.Request
    :param id: The id of the ticket that needs to be returned to user.
    :return: rest_framework.response.Response (json data about the specified ticket).
    """

    try:
        ticket = z_api.ZTicket.show_ticket(id=id)
    except requests.exceptions.HTTPError as http_err:
        message = ''
        content_type = http_err.response.headers.get('content-type', '')

        if "application/json" in content_type:
            message = http_err.response.json()
            message['status'] = http_err.response.status_code

        elif "text/plain" in content_type:
            message = "(STATUS {code}): ".format(code=http_err.response.status_code)
            message += http_err.response.content

        else:
            message = "Unknown error occurred."

        raise exceptions.APIException(message)

    except requests.exceptions.RequestException as req_err:
        raise exceptions.APIException(str(req_err))

    return Response(ticket.serialize(), status=status.HTTP_200_OK)


@api_view(['GET'])
def list_tickets(request):
    """
    This function based view will return ticket details for the configured Zendesk account.
    :param request: rest_framework.response.Request
    :queryParam page: Specifies which subset of tickets to return (used for pagination).
    :return: rest_framework.response.Response (json data about the tickets).
    """

    page_num = request.query_params.get('page', 1)

    try:
        tickets, count = z_api.ZTicket.list_tickets(page_num=page_num)
    except requests.exceptions.HTTPError as http_err:
        message = ''
        content_type = http_err.response.headers.get('content-type', '')
        if "application/json" in content_type:
            message = http_err.response.json()
            message['status'] = http_err.response.status_code

        elif "text/plain" in content_type:
            message = "(STATUS {code}): ".format(code=http_err.response.status_code)
            message += http_err.response.content

        else:
            message = "Unknown error occurred."

        raise exceptions.APIException(message)

    except requests.exceptions.RequestException as req_err:
        raise exceptions.APIException(str(req_err))

    tickets_data = {
        "tickets": [],
        "count": count
    }
    for ticket in tickets:
        tickets_data.get("tickets").append(ticket.serialize())

    return Response(tickets_data, status=status.HTTP_200_OK)


@api_view(['GET'])
def list_comments(request, ticket_id):
    """
    This function based view will return comment details for a given ticket.
    :param request: rest_framework.response.Request
    :param ticket_id: The id of the ticket to use to get its associated comments.
    :queryParam page: Specifies which subset of comments to return (used for pagination).
    :return: rest_framework.response.Response (json data about the tickets).
    """

    page_num = request.query_params.get('page', 1)

    try:

        comments, count = z_api.ZComment.list_comments(ticket_id=ticket_id, page_num=page_num)
    except requests.exceptions.HTTPError as http_err:

        message = ''
        content_type = http_err.response.headers.get('content-type', '')

        if "application/json" in content_type:
            message = http_err.response.json()
            message['status'] = http_err.response.status_code

        elif "text/plain" in content_type:
            message = "(STATUS {code}): ".format(code=http_err.response.status_code)
            message += http_err.response.content

        else:
            message = "Unknown error occurred."

        raise exceptions.APIException(message)

    except requests.exceptions.RequestException as req_err:
        raise exceptions.APIException(str(req_err))

    comments_data = {
        "comments": [],
        "count": count
    }

    for comment in comments:
        comments_data.get("comments").append(comment.serialize())

    return Response(comments_data, status=status.HTTP_200_OK)


@api_view(['GET'])
def not_found(request):
    raise exceptions.NotFound(
        'The requested resource could not be found. This could be due to invalid input or a malformed url')
