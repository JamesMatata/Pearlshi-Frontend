import React, { useRef, useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import './TopReviews.css';
import { Link } from 'react-router-dom';

const TopReviews = () => {
  const dialogRef = useRef(null);
  const [topReviews, setTopReviews] = useState([]);
  const [formData, setFormData] = useState({
    booking_id: '',
    review_text: '',
    rating: 1,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  // State for handling errors
  const [submitError, setSubmitError] = useState('');  // State for form submission error
  const [success, setSuccess] = useState(false);  // State for handling successful submission

  // Fetch top 3 reviews from the backend
  useEffect(() => {
    const fetchTopReviews = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/reviews/top/');
        if (!response.ok) {
          throw new Error('Failed to fetch top reviews');
        }
        const data = await response.json();
        console.log('Top Reviews:', data);  // Debugging to check the data format
        setTopReviews(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTopReviews();
  }, []);

  const openModal = (e) => {
    e.preventDefault();
    dialogRef.current.showModal();
    setSubmitError('');  // Clear any previous error when opening the modal
  };

  const closeModal = () => {
    dialogRef.current.close();
    setSuccess(false);  // Reset success state when modal closes
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (e) => {
    setFormData({ ...formData, rating: parseInt(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/reviews/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newReview = await response.json();
        console.log('Review submitted:', newReview);
        setSuccess(true);  // Mark submission as successful
        setFormData({
          booking_id: '',
          review_text: '',
          rating: 1,
        });  // Reset the form
        closeModal();  // Close modal after submission
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || 'Failed to submit review');  // Set error message
      }
    } catch (error) {
      console.error('An error occurred', error);
      setSubmitError('An error occurred while submitting the review.');  // Set generic error
    }
  };

  if (loading) {
    return <div>Loading top reviews...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="top-reviews-section">
      <h2 style={{fontSize: '30px', fontWeight: 'bold', textAlign: 'center', color: '#3b82f6', marginBottom: '5px'}}>Top Customer Reviews</h2>
      <hr style={{maxWidth: '50%', margin: 'auto'}}></hr>
      <p style={{maxWidth: '50%', textAlign: 'center', margin: 'auto', marginBottom: '30px'}}>See what others are saying! Dive into our reviews to discover first hand experiences and feedback from our vibrant community</p>
      <div id="top-reviews-list" style={{display: 'flex',flexDirection: 'row'}}>
        {topReviews.map((review, index) => (
          review.booking && review.booking.first_name ? (
            <ReviewCard
              key={index}
              reviewerName={review.booking.first_name + ' ' + review.booking.last_name}
              reviewText={review.review_text}
              rating={review.rating}
            />
          ) : (
            <div key={index}>Booking information is missing</div>
          )
        ))}
      </div>

      <div id="top-reviews-action-buttons">
        <button type="button" className="submit-review-btn" onClick={openModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" style={{marginRight: '5px'}} viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16"/><path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z"/></g></svg>
          Leave a Review
        </button>

        <Link to="/reviews">
          <button className="view-all-btn">
            View All Reviews
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" style={{marginLeft: '5px'}} viewBox="0 0 32 32"><path fill="currentColor" d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z"/><path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"/></svg>
          </button>
        </Link>
      </div>

      <dialog ref={dialogRef} id="top-reviews-modal" style={{ padding: '20px', borderRadius: '8px', border: '2px solid #3b82f6', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)', width: '50%', maxWidth: '400px', margin: 'auto' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
    <h2 style={{ fontSize: '24px', color: '#3b82f6', margin: 0 }}>Submit Your Review</h2>
    <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="black">
        <path fillRule="evenodd" d="M12 10.586l-4.95-4.95-1.414 1.414L10.586 12l-4.95 4.95 1.414 1.414L12 13.414l4.95 4.95 1.414-1.414L13.414 12l4.95-4.95-1.414-1.414L12 10.586z" clipRule="evenodd" />
      </svg>
    </button>
  </div>

  {success && <div style={{ color: 'green', marginBottom: '15px' }}>Review submitted successfully!</div>}
  {submitError && <div style={{ color: 'red', marginBottom: '15px' }}>{submitError}</div>}

  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <label htmlFor="booking_id" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Booking ID:</label>
    <input
      type="text"
      id="booking_id"
      name="booking_id"
      style={{ width: '100%', padding: '10px', border: '1px solid #3b82f6', borderRadius: '5px' }}
      value={formData.booking_id}
      onChange={handleChange}
      required
    />

    <label htmlFor="review_text" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Review:</label>
    <textarea
      id="review_text"
      name="review_text"
      value={formData.review_text}
      onChange={handleChange}
      rows="5"
      style={{ width: '100%', padding: '10px', border: '1px solid #3b82f6', borderRadius: '5px' }}
      required
    ></textarea>

    <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Rate the Service:</label>
    <div className="rating" style={{ display: 'flex', gap: '10px' }}>
      {[5, 4, 3, 2, 1].map((star) => (
        <label key={star} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <input
            type="radio"
            name="rating"
            value={star}
            checked={formData.rating === star}
            onChange={handleRatingChange}
            required
            style={{ marginRight: '5px' }}
          />
          {`${'⭐'.repeat(star)}`}
        </label>
      ))}
    </div>

    <button type="submit" style={{ padding: '10px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      Submit Review
    </button>
  </form>
</dialog>
    </div>
  );
};

export default TopReviews;
