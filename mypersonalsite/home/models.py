from django.db import models

class ViewsCount(models.Model):
    title = models.CharField(max_length=255)
    count = models.PositiveBigIntegerField(default=0, editable=False)

    # We will have only one record to keep track the number of hits on our site