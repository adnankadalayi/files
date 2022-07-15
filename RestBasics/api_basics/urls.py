from django.urls import path, include
from . import views
# from .views import ArticleApiView, ArticleEditView
from .views import GenericApiView, ArticleViewSet, GenericViewSet
from rest_framework.routers import DefaultRouter 

router = DefaultRouter()
router.register('article', GenericViewSet, basename='article')
# router.register('article', ArticleViewSet, basename='article')

urlpatterns = [
    path('viewset/<int:pk>/', include(router.urls)),
    path('viewset/', include(router.urls)),
    # path('articles', views.article_list),
    # path('articles', ArticleApiView.as_view()),
    # path('articles/<int:id>', ArticleEditView.as_view()),
    # path('articles/<int:pk>', views.article_detail),
    path('articles', GenericApiView.as_view()),
    path('articles/<int:id>', GenericApiView.as_view()),

]
