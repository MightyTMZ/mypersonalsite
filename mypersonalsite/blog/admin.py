from django.contrib import admin
from.models import TextBlock, HeadingBlock, ImageBlock, Article, Author, Link, Publisher

admin.site.register(Publisher)
admin.site.register(Author)


class TextBlockInline(admin.StackedInline):
    model = TextBlock
    extra = 1


class HeadingBlockInline(admin.StackedInline):
    model = HeadingBlock
    extra = 1


class ImageBlockInline(admin.StackedInline):
    model = ImageBlock
    extra = 1


class LinkInline(admin.StackedInline):
    model = Link
    extra = 1


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'slug',
        'author',
        'created_at',
        'updated_at',
        'is_published',  # used to adjust the visibility to the user
    )

    inlines = [TextBlockInline, HeadingBlockInline, ImageBlockInline, LinkInline]
