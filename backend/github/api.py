import requests

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK


@api_view(['GET'])
def search_github(request):
    """
    Make an API Call to Github
    """
    file = request.GET.get('file')
    search = request.GET.get('search')
    url = "https://api.github.com/search/code?q=%s+in:file+language:%s+repo:microsoft/vscode" % (search, file)
    # print(file, search, url)
    payload = {}
    headers = {
      'Accept': 'application/vnd.github.v3+json'
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    # print(response.text.encode('utf8'))
    return Response(response.json(), status=HTTP_200_OK)
    # return Response({'data':'one'})




