from django.shortcuts import render
from rest_framework import views
from rest_framework.response import Response
from .models import *
from .serializers import *



class ArticleList(views.APIView):
    def get(self, request, format=None):
        queryset = Article.objects.all() # you can add pagination later
        serializer = ArticleSerializer(queryset, many=True)
        return Response(serializer.data)