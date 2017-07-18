from django.conf import settings
from django.core import urlresolvers
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from rest_framework.decorators import api_view
import z_api

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

    # Implement exception handling.
    ticket = z_api.ZTicket.get_ticket(id=id)
    return Response(ticket.serialize(), status=status.HTTP_200_OK)


@api_view(['GET'])
def list_tickets(request):
    """
    This function based view will return ticket details for the configured Zendesk account.
    :param request: rest_framework.response.Request
    :queryParam page: Specifies which subset of tickets to return (used for pagination).
    :return: rest_framework.response.Response (json data about the tickets).
    """

    # Implement exception handling.
    page_num = request.query_params.get('page', 1)
    tickets, count = z_api.ZTicket.list_tickets(page_num=page_num)

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

    # Implement exception handling for both url processing and ticket data.
    page_num = request.query_params.get('page', 1)
    comments, count = z_api.ZComment.list_comments(ticket_id=ticket_id, page_num=page_num)

    comments_data = {
        "comments": [],
        "count": count
    }

    for comment in comments:
        comments_data.get("comments").append(comment.serialize())

    return Response(comments_data, status=status.HTTP_200_OK)


@api_view(['GET'])
def not_found(request):
    raise NotFound("The requested url could not be found.")
