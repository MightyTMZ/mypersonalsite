from rest_framework import serializers
from .models import *


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = [
            'name', 
            'role', 
            'link', # will be used to attach their LinkedIn
            'testimonial'
        ]


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = [
            'title', 
            'description', 
            'date'
        ]




class VentureSerializer(serializers.ModelSerializer):
    achievements = AchievementSerializer(many=True, read_only=True)
    testimonials = TestimonialSerializer(many=True, read_only=True)

    class Meta:
        model = Venture
        fields = [
            'title', 
            'description', 
            'start_date', 
            'end_date', 
            'website', 
            'achievements', 
            'testimonials'
        ]