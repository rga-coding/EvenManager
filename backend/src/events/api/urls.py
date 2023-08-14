from rest_framework import routers
from .views import EventViewSet
from django.urls import path, include

router = routers.DefaultRouter()
# /api/events
router.register(r'events', EventViewSet)
urlpatterns = [
    path('', include(router.urls))
]
