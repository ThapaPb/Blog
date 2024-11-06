from django.shortcuts import render

# Create your views here.

from rest_framework import generics
from .models import BlogEntry
from .serializers import BlogEntrySerializer

class EntryList(generics.ListAPIView):
    queryset = BlogEntry.objects.all().order_by('-date_created')
    serializer_class = BlogEntrySerializer

class EntryDetail(generics.RetrieveAPIView):
    queryset = BlogEntry.objects.all()
    serializer_class = BlogEntrySerializer
    lookup_field = 'slug'
