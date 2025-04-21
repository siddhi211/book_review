import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookDetails.css';

function BookDetails({ book, onBack, onError }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/books/${book.id}/reviews/`);
        setReviews(response.data);
        setLoading(false);
      } catch (error) {
        onError(error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [book.id, onError]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8000/api/books/${book.id}/reviews/`, newReview);
      setReviews([...reviews, response.data]);
      setNewReview({ rating: 5, comment: '' });
    } catch (error) {
      onError(error);
    }
  };

  if (loading) return <div className="loading">Loading reviews...</div>;

  return (
    <div className="book-details">
      <button className="back-button" onClick={onBack}>← Back to Books</button>
      
      <div className="book-info">
        <h2>{book.title}</h2>
        <p>By: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Published: {book.published_year}</p>
        <p>Average Rating: {book.average_rating || 'No ratings yet'}</p>
      </div>

      <div className="review-section">
        <h3>Add a Review</h3>
        <form onSubmit={handleSubmitReview}>
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}
          >
            {[5,4,3,2,1].map(num => (
              <option key={num} value={num}>{num} Stars</option>
            ))}
          </select>
          <textarea
            value={newReview.comment}
            onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
            placeholder="Write your review..."
            required
          />
          <button type="submit">Submit Review</button>
        </form>

        <h3>Reviews</h3>
        <div className="reviews-list">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="rating">{'⭐'.repeat(review.rating)}</div>
              <p>{review.comment}</p>
              <small>Posted on: {new Date(review.timestamp).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;