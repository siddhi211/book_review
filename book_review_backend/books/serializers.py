from rest_framework import serializers
from .models import Book, Review
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ('id', 'book', 'user', 'rating', 'comment', 'created_at')
        read_only_fields = ('created_at',)

class BookSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    average_rating = serializers.FloatField(read_only=True)

    class Meta:
        model = Book
        fields = ('id', 'title', 'author', 'genre', 'published_year', 
                 'reviews', 'average_rating', 'created_at')
        read_only_fields = ('created_at',)