from django.db import models

# Create your models here.
class Course(models.Model):
    name=models.CharField(max_length=255)
    description=models.TextField()
    price=models.DecimalField(max_digits=10,decimal_places=2)
    category=models.ForeignKey('Category',related_name='course_category',on_delete=models.SET_NULL,null=True)
    image=models.ImageField(upload_to='post')
    slug=models.SlugField(blank=True,null=True , unique=True)
    

    def __str__(self):
        return self.name
    

class Category(models.Model):
    name=models.CharField(max_length=16)
    def __str__(self) :
        return self.name
