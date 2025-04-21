import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookList.css';

function BookList({ onSelectBook, onError, filters }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/books/');
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        onError(error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [onError]);

  const filteredBooks = books.filter(book => {
    return (
      book.genre.toLowerCase().includes(filters.genre.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase())
    );
  });

  if (loading) return <div className="loading">Loading books...</div>;

  return (
    <div className="book-list">
      {filteredBooks.map(book => (
        <div key={book.id} className="book-card" onClick={() => onSelectBook(book)}>
          <h2>{book.title}</h2>
          <p>By: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Published: {book.published_year}</p>
          <div className="rating">
            Average Rating: {book.average_rating || 'No ratings yet'}
            {book.average_rating && ' ⭐'}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;