from django.urls import reverse
from rest_framework.test import APITestCase


class TestSearch(APITestCase):

    def test_searching(self):
        """
        Ensure we are able to search Github.
        """
        url = reverse('github:search')
        url += '?file=js&search=js'
        request = self.client.get(url)
        self.assertTrue(request.status_code, 200)
