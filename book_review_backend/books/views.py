from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.db.models import Avg
from .models import Book, Review
from .serializers import BookSerializer, ReviewSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.annotate(average_rating=Avg('reviews__rating'))
    serializer_class = BookSerializer
    permission_classes = [AllowAny]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'author', 'genre']
    ordering_fields = ['title', 'author', 'published_year']

    @action(detail=True, methods=['get', 'post'])
    def reviews(self, request, pk=None):
        try:
            book = self.get_object()
            if request.method == 'GET':
                reviews = book.reviews.all()
                serializer = ReviewSerializer(reviews, many=True)
                return Response(serializer.data)
            elif request.method == 'POST':
                data = request.data.copy()
                data['book'] = book.id
                serializer = ReviewSerializer(data=data)
                if serializer.is_valid():
                    serializer.save(user=request.user if request.user.is_authenticated else None)
                    return Response(serializer.data, status=201)
                return Response(serializer.errors, status=400)
        except Exception as e:
            return Response({'error': str(e)}, status=500)

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        book_id = self.kwargs.get('book_pk')
        serializer.save(book_id=book_id)
