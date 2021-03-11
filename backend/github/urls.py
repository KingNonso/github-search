from django.urls import path

from . import api

app_name = 'github'

urlpatterns = [
    path('language/', api.SearchGithub.as_view(), name='search_github'),
]
