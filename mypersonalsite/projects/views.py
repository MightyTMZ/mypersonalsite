from rest_framework import views
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from .models import *
from .serializers import *

# make sure to cache these as well

class ProjectList(views.APIView):
    def get(self, request, format=None):
        queryset = Project.objects.all()
        serializer = ProjectSerializer(queryset, many=True) # you can add pagination later
        return Response(serializer.data)


@api_view(['GET'])
def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    serializer = ProjectSerializer(project)
    return Response(serializer.data)