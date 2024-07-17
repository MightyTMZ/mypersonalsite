from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.SkillSet.as_view())
]