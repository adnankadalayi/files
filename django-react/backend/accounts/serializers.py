from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

def UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'name', 'email', 'password')