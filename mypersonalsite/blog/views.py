from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializers import *



class ArticleList(APIView):
    def get(self, request, format=None):
        queryset = Article.objects.all() # you can add pagination later
        serializer_class = 