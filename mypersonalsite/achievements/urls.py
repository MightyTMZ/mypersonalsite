from django.urls import path
from . import views


urlpatterns = [
    path("certificates/all/", views.CertificatesList.as_view())
]