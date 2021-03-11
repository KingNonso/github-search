from django.db import models


class Searches(models.Model):
    client_ip = models.GenericIPAddressField('Client IP Address', null=True, blank=True)
    search = models.TextField('Search term', null=False, blank=False)
    date = models.DateTimeField(auto_now_add=True)


# class Results(models.Model):
#     search = models.ForeignKey(Searches)
#     name = models.CharField()
