from django.contrib import admin
from .models import *


class TestimonialInline(admin.StackedInline):
    model = Testimonial
    extra = 1


class AchievementInline(admin.StackedInline):
    model = Achievement
    extra = 1


@admin.register(Venture)
class VentureAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'description',
        'start_date',
        'end_date',
        'website'
    )

    list_editable = (
        "description",
        'website'
    )

    inlines = [TestimonialInline, AchievementInline]