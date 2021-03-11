import requests
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK


# Cache requested url for each user for 2 hours
from rest_framework.views import APIView

from .models import Searches


class SearchView(APIView):

    # Cache page for the requested url
    @method_decorator(cache_page(60*60*2))
    @method_decorator(vary_on_cookie)
    def get(self, request, format=None):
        """
        Make an API Call to Github
        """
        file = request.GET.get('file')
        search = request.GET.get('search')
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        print('ip', ip)
        url = "https://api.github.com/search/code?q=%s+in:file+language:%s+repo:microsoft/vscode" % (search, file)
        # print(file, search, url)
        payload = {}
        headers = {
            'Accept': 'application/vnd.github.v3+json'
        }
        Searches.objects.create(client_ip=ip, search=search)
        response = requests.request("GET", url, headers=headers, data=payload)

        # print(response.text.encode('utf8'))
        return Response(response.json(), status=HTTP_200_OK)




