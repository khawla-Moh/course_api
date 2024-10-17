from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from .models import Courses,Category
from . import serializers



class CoursesListAPI(generics.ListAPIView):
    queryset=Courses.objects.all()
    serializer_class=serializers.CourseListSerializer
    


class CourseDetailAPI(generics.RetrieveAPIView):
    queryset=Courses.objects.all()
    serializer_class=serializers.CourseDetailSerializer   
    filter_backends = [DjangoFilterBackend,filters.OrderingFilter]
    ordering_fields = ['price']
            
