from django.db import models


class Issuer(models.Model):
    name = models.CharField(max_length=255)
    url = models.CharField(max_length=2083)
    logo = models.ImageField(upload_to="media/issuers/logos/")

    def __str__(self) -> str:
        return self.name


class Certificate(models.Model):
    title = models.CharField(max_length=255)
    issuer = models.ForeignKey(Issuer, on_delete=models.CASCADE)
    url = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self) -> str:
        return f"{self.title} - {self.issuer}"