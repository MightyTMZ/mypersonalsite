from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    visible = models.BooleanField(default=False)
    views = models.PositiveBigIntegerField(default=0, editable=False)

    def __str__(self):
        return self.title


class Photo(models.Model):
    image = models.ImageField(upload_to="media/")
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="images")


class Link(models.Model):

    TYPES_OF_LINKS = [
        ('GitHub', 'GitHub'),
        ('Devpost', 'Devpost'),
        ('Site', 'Site'),
        ('Demo', 'Demo')
    ]

    link = models.CharField(max_length=2083)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='links')
    type = models.CharField(max_length=255, choices=TYPES_OF_LINKS)

    def __str__(self):
        return self.link


class Achievement(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    # the description field will appear when the user hovers over the achievement icon on the frontend
    icon = models.ImageField(upload_to="media/icon")
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    # will serve as a badge for all our projects

    def __str__(self):
        return self.title



