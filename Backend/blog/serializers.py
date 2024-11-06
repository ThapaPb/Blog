from rest_framework import serializers
from .models import BlogEntry

class BlogEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogEntry
        fields = ['title', 'subtitle', 'content', 'date_created', 'slug', 'featured_image', 'views']
