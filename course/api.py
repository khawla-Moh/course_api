from rest_framework import generics
import django_filters.rest_framework
from rest_framework.filters import SearchFilter
from .models import Courses,Category
from . import serializers
from rest_framework.decorators import action



class CoursesListAPI(generics.ListAPIView):
    queryset=Courses.objects.all()
    serializer_class=serializers.CourseListSerializer
    filter_backends = [SearchFilter]
    search_fields = ['name', 'description', 'category__name']
    @action(detail=False, methods=['post'])
    def create_course(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CourseDetailAPI(generics.RetrieveAPIView):
    queryset=Courses.objects.all()
    serializer_class=serializers.CourseDetailSerializer   
    
            
