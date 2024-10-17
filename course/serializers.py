from rest_framework import serializers
from .models import Courses,Category





class CourseListSerializer(serializers.ModelSerializer):

    category=serializers.StringRelatedField()
    
    class Meta:
        model=Courses
        fields=['name','price','category','image']


class CourseDetailSerializer(serializers.ModelSerializer):
    category=serializers.StringRelatedField()
    class Meta:
   
        model=Courses
        fields=['name','price','category','image']

