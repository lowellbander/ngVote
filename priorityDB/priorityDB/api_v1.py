from tastypie.resources import ModelResource
from priorityDB.models import *

class TaskResource(ModelResource):
    class Meta:
        queryset = Task.objects.all()
        allowed_methods = ['get', 'post', 'put', 'delete']

class EventResource(ModelResource):
    class Meta:
        queryset = Event.objects.all()
        allowed_methods = ['get']

class TaskHistoryResource(ModelResource):
    class Meta:
        queryset = TaskHistory.objects.all()
        allowed_methods = ['get']