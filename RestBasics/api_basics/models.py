from django.db import models

class Article(models.Model):
    title   = models.CharField(max_length=255)
    author  = models.CharField(max_length=255)
    email   = models.EmailField(max_length=255, unique=True)
    date    = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title