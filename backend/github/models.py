from django.db import models


class Searches(models.Model):
    client_ip = models.GenericIPAddressField('Client IP Address', null=True, blank=True)
    search = models.TextField('Search term', null=False, blank=False)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Searches'
        verbose_name_plural = 'Searches'

    def __str__(self):
        return self.search



