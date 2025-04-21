import React, { useState } from 'react';
import axios from 'axios';

function BookDetails({ book, onBack }) {
  const [reviews, setReviews] = useState(book.reviews || []);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const addReview = () => {
    axios.post('http://localhost:8000/api/reviews/', {
      book: book.id,
      rating,
      comment
    }).then(res => {
      setReviews([...reviews, res.data]);
      setRating(5);
      setComment('');
    });
  };

  return (
    <div>
      <button onClick={onBack}>Back to list</button>
      <h2>{book.title}</h2>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Genre:</b> {book.genre}</p>
      <p><b>Published Year:</b> {book.published_year}</p>
      <p><b>Average Rating:</b> {book.average_rating ?? 'No reviews yet'}</p>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(r => (
          <li key={r.id}>
            <b>Rating:</b> {r.rating} / 5<br />
            <b>Comment:</b> {r.comment}<br />
            <i>{new Date(r.timestamp).toLocaleString()}</i>
          </li>
        ))}
      </ul>
      <h4>Add a Review</h4>
      <label>
        Rating:
        <input type="number" min="1" max="5" value={rating}
               onChange={e => setRating(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Comment:
        <input value={comment} onChange={e => setComment(e.target.value)} />
      </label>
      <br />
      <button onClick={addReview}>Submit Review</button>
    </div>
  );
}

export default BookDetails;
