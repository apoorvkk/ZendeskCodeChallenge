from django.conf.urls import url
from zticket_viewer_web_app import views

urlpatterns = [
    url(r'^tickets.json$', views.list_tickets, name='list-tickets'),
    url(r'^tickets/(?P<id>[0-9]+).json$', views.show_ticket, name='show-ticket'),
    url(r'^tickets/(?P<ticket_id>[0-9]+)/comments.json$', views.list_comments, name='list-comments')
]
