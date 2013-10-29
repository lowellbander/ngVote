from django.contrib import admin
from priorityDB.models import *

# Register your models here

# For more information on this file, see
# https://docs.djangoproject.com/en/dev/intro/tutorial02/

class TaskHistoryInline(admin.StackedInline):
    model = TaskHistory
    extra = 0
 
class EventAdmin(admin.ModelAdmin):
    inlines = [TaskHistoryInline]
 
admin.site.register(Event, EventAdmin)

admin.site.register(Task)