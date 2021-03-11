from django.contrib import admin

from . import models


@admin.register(models.Searches)
class SearchesAdmin(admin.ModelAdmin):
    list_display = ('client_ip', 'search', 'date')
    list_filter = ('client_ip', 'date', 'search')

