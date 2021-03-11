from django.urls import path

from . import api

app_name = 'github'

urlpatterns = [
    path('', api.SearchView.as_view(), name='search_github'),
]
