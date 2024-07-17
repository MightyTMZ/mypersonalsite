from django.urls import path
from . import views

urlpatterns = [
    path("all/", views.ArticleList.as_view(), name="article-list")
]