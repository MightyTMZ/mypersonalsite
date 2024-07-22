from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *


class ViewsCountView(APIView):
    def get(self, request, format=None):
        views_count = ViewsCount.objects.get(pk=1)
        views_count.count += 1
        views_count.save()
        serializer = ViewsCountSerializer(views_count)
        return Response(serializer.data)
    
