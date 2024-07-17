from django.urls import path
from . import views

urlpatterns = [
    path("all/", views.ProjectList.as_view())
]