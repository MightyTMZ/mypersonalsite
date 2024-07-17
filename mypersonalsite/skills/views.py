from django.shortcuts import render
from rest_framework import views
from rest_framework.response import Response
from .models import *
from .serializers import *

class SkillSet(views.APIView):
    def get(self, request, format=None):
        queryset = Skill.objects.all() # you can add pagination later  
        serializer = SkillSerializer(queryset, many=True)
        return Response(serializer.data)