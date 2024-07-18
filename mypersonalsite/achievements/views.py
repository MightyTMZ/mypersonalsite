from django.shortcuts import render
from rest_framework import views
from rest_framework.response import Response
from .models import *
from .serializers import *


class CertificatesList(views.APIView):
    def get(self, request, format=None):
        queryset = Certificate.objects.all() # you can add pagination later
        serializer = CertificateSerializer(queryset, many=True)
        return Response(serializer.data)