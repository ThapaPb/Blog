from django.db import models

# Create your models here.

class BlogEntry(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=300, blank=True)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(unique=True)
    featured_image = models.ImageField(upload_to='images/', blank=True)
    views = models.IntegerField(default=0)

    def __str__(self):
        return self.title

