from rest_framework import serializers
from .models import *


class IssuerSerializer(serializers.ModelSerializer):
    # make sure to cache it
    class Meta:
        model = Issuer
        fields = [
            'name', 
            'url', 
            'logo'
        ]



class CertificateSerializer(serializers.ModelSerializer):
    # make sure to cache it

    issuer = IssuerSerializer(read_only=True)

    class Meta:
        model = Certificate
        fields = [
            'title', 
            'issuer', 
            'url'
        ]