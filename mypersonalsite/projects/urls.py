from django.urls import path
from . import views

urlpatterns = [
    path("all/", views.ProjectList.as_view(), name="projects-list"), 
    path('<int:pk>/', views.project_detail, name="project-detail")
]