from rest_framework import views
from rest_framework.response import Response
from .models import *
from .serializers import *

# make sure to cache these as well

class ProjectList(views.APIView):
    def get(self, request, format=None):
        queryset = Project.objects.all()
        serializer = ProjectSerializer(queryset, many=True) # you can add pagination later
        return Response(serializer.data)
