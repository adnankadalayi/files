from django.urls import path
from . import views

urlpatterns = [
    path('', views.Routes),
    path('notes/', views.getNotes),
    path('notes/<str:pk>/', views.getNote),
]
