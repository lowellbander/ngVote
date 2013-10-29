from django.db import models

# Create your models here.

# For more information on this file, see
# https://docs.djangoproject.com/en/{{ docs_version }}/intro/tutorial01/

class Task(models.Model):
    name = models.CharField(max_length=255)
    owner_uid = models.IntegerField() # LDAP uid
    position = models.IntegerField(default=0) # position of 0 implies that task it completed
    last_event = models.ForeignKey('Event',blank=True,null=True) # this is the most recent change for this task
    def __unicode__(self):
        return self.name

class Event(models.Model):
    changed_by_uid = models.IntegerField() # LDAP uid
    timestamp = models.DateTimeField(auto_now=True)
    comment = models.TextField(blank=True)
    primary_task_history = models.ForeignKey('TaskHistory', related_name='+') # this is the Task that we changed
    #def __unicode__(self):
    #    return self.poll.__unicode__() + ' > ' + self.choice_text

class TaskHistory(models.Model):
    event = models.ForeignKey(Event)
    task = models.ForeignKey(Task)
    name = models.CharField(max_length=255)
    owner_uid = models.IntegerField() # LDAP uid
    position = models.IntegerField(default=0) # position of 0 implies that task it completed