from django.db import models
from datetime import datetime

class Duck(models.Model):
    name = models.CharField(max_length=120, default='Duck')
    time = models.DateTimeField(default=datetime.now)
    food = models.CharField(max_length=120, default=' ')
    where = models.CharField(max_length=120, default=' ')
    howMany = models.IntegerField(default=0)
    howMuch = models.IntegerField(default=0)


    def __str__(self):
        return self.name
