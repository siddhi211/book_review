import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookList({ onSelectBook }) {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    let url = 'http://localhost:8000/api/books/';
    let params = [];
    if (genre) params.push(`search=${genre}`);
    if (author) params.push(`search=${author}`);
    if (params.length) url += '?' + params.join('&');
    axios.get(url).then(res => setBooks(res.data));
  }, [genre, author]);

  return (
    <div>
      <h2>Books</h2>
      <label>
        Filter by Genre:
        <input value={genre} onChange={e => setGenre(e.target.value)} />
      </label>
      <label>
        Filter by Author:
        <input value={author} onChange={e => setAuthor(e.target.value)} />
      </label>
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => onSelectBook(book)}>
            <b>{book.title}</b> by {book.author} ({book.genre}, {book.published_year})<br />
            Average Rating: {book.average_rating ?? 'No reviews yet'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
