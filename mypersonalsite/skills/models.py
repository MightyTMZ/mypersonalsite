from django.db import models


class Skill(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    icon = models.ImageField(upload_to="media/skills/icon")