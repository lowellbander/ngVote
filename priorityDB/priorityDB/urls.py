from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

# http://django-tastypie.readthedocs.org/en/latest/index.html

from tastypie.api import Api
from priorityDB.api_v1 import *

api_v1 = Api(api_name='dev') # later rename the api_name to 'v1'
api_v1.register(TaskResource())

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    (r'^api/', include(api_v1.urls)),
)
