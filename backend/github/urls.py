from django.urls import path

from . import api

app_name = 'github'

urlpatterns = [
    path('', api.search_github, name='search_github'),
]
