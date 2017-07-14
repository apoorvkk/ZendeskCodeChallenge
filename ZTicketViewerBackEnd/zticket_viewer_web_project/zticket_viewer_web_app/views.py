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
def list_tickets(request):
    # Implement exception handling.
    page_num = request.query_params.get('page', 1)
    tickets, next_page, prev_page, count = z_api.ZTicket.list_tickets(page_num=page_num)

    next_page_url = None
    prev_page_url = None

    if next_page:
        next_page_url = "{uri}?page={pg_num}".format(
            uri=urlresolvers.reverse("list-tickets"), pg_num=next_page)
    if prev_page:
        prev_page_url = "{uri}?page={pg_num}".format(
            uri=urlresolvers.reverse("list-tickets"), pg_num=prev_page)

    tickets_data = {
        "tickets": [],
        "next_page": next_page_url,
        "previous_page": prev_page_url,
        "count": count
    }
    for ticket in tickets:
        tickets_data.get("tickets").append(ticket.serialize())

    return Response(tickets_data, status=status.HTTP_200_OK)


@api_view(['GET'])
def list_comments(request, ticket_id):
    # Implement exception handling for both url processing and ticket data.
    page_num = request.query_params.get('page', 1)
    comments, next_page, prev_page, count = z_api.ZComment.list_comments(ticket_id=ticket_id, page_num=page_num)

    next_page_url = None
    prev_page_url = None

    if next_page:
        next_page_url = "{uri}?page={page_num}".format(uri=urlresolvers.reverse("list-comments", kwargs={'ticket_id': ticket_id}), page_num=next_page)
    if prev_page:
        prev_page_url = "{uri}?page={page_num}".format(uri=urlresolvers.reverse("list-comments", kwargs={'ticket_id': ticket_id}), page_num=prev_page)

    comments_data = {
        "comments": [],
        "next_page": next_page_url,
        "previous_page": prev_page_url,
        "count": count
    }
    for comment in comments:
        comments_data.get("comments").append(comment.serialize())

    return Response(comments_data, status=status.HTTP_200_OK)


@api_view(['GET'])
def not_found(request):
    raise NotFound("The requested url could not be found.")