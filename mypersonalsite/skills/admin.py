from django.contrib import admin
from .models import *

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = (
        'title', 
        'description',
    )

