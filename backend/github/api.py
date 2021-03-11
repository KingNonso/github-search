from datetime import datetime, timedelta
from typing import Any

from django.utils.dateparse import parse_date
from rest_framework import generics, status
from rest_framework.request import Request
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.utils import timezone
from django.db.models import Count, QuerySet



class SearchGithub(generics.ListAPIView):
    pass