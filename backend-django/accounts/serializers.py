from django.contrib.auth.models import User
from django.forms import ValidationError
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(allow_blank=True)
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise ValidationError({"password": "passwords do not match"})
        return attrs
 
    def create(self, validated_data):
        validated_data.pop("password2")    
        user = User.objects.create_user(username=validated_data["username"], password=validated_data["password"], email=validated_data["email"])

        return user
    




