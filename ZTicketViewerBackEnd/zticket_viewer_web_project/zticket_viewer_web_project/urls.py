from django.conf.urls import url
from django.contrib import admin
from rest_framework.compat import include
from zticket_viewer_web_app import api_urls
from zticket_viewer_web_app import views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1/', include(api_urls)),
    url(r'.*', views.not_found, name='not-found')
]



