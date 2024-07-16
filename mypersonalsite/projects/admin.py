from django.contrib import admin
from .models import *


class PhotoInline(admin.StackedInline):
    model = Photo
    extra = 1


class AchievementInline(admin.StackedInline):
    model = Achievement
    extra = 1


class LinkInline(admin.StackedInline):
    model = Link
    extra = 1


@admin.register(Project)
class VentureAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'description',
        'visible',
    )
    # you can think about adding a displayed field(s) of the number of images, achievements

    inlines = [LinkInline, AchievementInline, PhotoInline]