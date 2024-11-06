from django.urls import path
from .views import EntryList, EntryDetail

urlpatterns = [
    path('entries/', EntryList.as_view(), name='entry-list'),
    path('entries/<slug:slug>/', EntryDetail.as_view(), name='entry-detail'),
]
