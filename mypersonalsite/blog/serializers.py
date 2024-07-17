from rest_framework import serializers
from .models import *

# you must cache these articles to speed up user experience (15 minute cycles)


class TextBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextBlock
        fields = [
            'content', 
            'type',
            'order', 
        ]


class HeadingBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeadingBlock
        fields = [
            'heading', 
            'type',
            'order', 
        ]
    

class ImageBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageBlock
        fields = [
            'image', 
            'type',
            'caption', 
            'order', 
        ]


class PublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = [
            'title', 
            'icon'
        ]


class LinkSerializer(serializers.ModelSerializer):

    publisher = PublisherSerializer(read_only=True)

    class Meta:
        model = Link
        fields = [
            'url', 
            'publisher', 
        ]



class ArticleSerializer(serializers.ModelSerializer):
    
    text_blocks = TextBlockSerializer(many=True, read_only=True)
    heading_blocks = HeadingBlockSerializer(many=True, read_only=True)
    image_blocks = ImageBlockSerializer(many=True, read_only=True)
    links = LinkSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        fields = [
            'id',
            'title', 
            'slug', 
            'created_at', 
            'updated_at',
            'is_published', 
            'featured_image', 
            'text_blocks', 
            'heading_blocks', 
            'image_blocks',
            'links'

        ]