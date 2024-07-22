from rest_framework import serializers
from .models import ViewsCount


class ViewsCountSerializer(serializers.ModelSerializer):
    class Meta:
        model = ViewsCount
        fields = ['title', 'count']