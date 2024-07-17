from django.db import models


class Venture(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    website = models.URLField(max_length=2083, null=True, blank=True)

    def __str__(self):
        return self.title


class Testimonial(models.Model):
    venture = models.ForeignKey(Venture, on_delete=models.CASCADE, related_name='testimonials')
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    link = models.CharField(max_length=2083, default="link not filled in") # attach a link that will be about that testimonial
    testimonial = models.TextField()

    def __str__(self):
        return f"{self.name} - {self.role}"


class Achievement(models.Model):
    venture = models.ForeignKey(Venture, on_delete=models.CASCADE, related_name='achievements')
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.title