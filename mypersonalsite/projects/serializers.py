from rest_framework import serializers
from .models import *


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['image']


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ["link", 'type']


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = [
            'title', 
            'description', 
            'icon', 
        ]



class ProjectSerializer(serializers.ModelSerializer):
    images = PhotoSerializer(many=True, read_only=True)
    links = LinkSerializer(many=True, read_only=True)
    achievements = AchievementSerializer(many=True, read_only=True, source='achievement_set')

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'visible', 'images', 'links', 'achievements']
