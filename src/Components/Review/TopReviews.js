import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate
import ReviewCard from './ReviewCard';
import './TopReviews.css';

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

  const location = useLocation(); // To detect the current URL
  const navigate = useNavigate(); // To change the URL programmatically

  // Check if the URL contains the parameter to open the modal
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const bookingIdFromURL = queryParams.get('booking_id');

    // Populate booking ID from URL if it exists
    if (bookingIdFromURL) {
      setFormData(prevFormData => ({
        ...prevFormData,
        booking_id: bookingIdFromURL,
      }));
    }

    // Delay the modal opening to ensure the dialog has been rendered
    if (location.pathname === '/review') {
      setTimeout(() => {
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
      }, 100); // Delay by 100ms
    }
  }, [location]);

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
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
    setSubmitError('');  // Clear any previous error when opening the modal
  };

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    setSuccess(false);  // Reset success state when modal closes
    navigate('/'); // Navigate back to home or another appropriate route after closing the modal
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      <h2 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', color: '#3b82f6', marginBottom: '5px' }}>Top Customer Reviews</h2>
      <hr style={{ maxWidth: '50%', margin: 'auto' }}></hr>
      <p style={{ maxWidth: '50%', textAlign: 'center', margin: 'auto', marginBottom: '30px' }}>See what others are saying! Dive into our reviews to discover firsthand experiences and feedback from our vibrant community</p>
      <div id="top-reviews-list">
        {topReviews.length > 0 ? (
          topReviews.map((review, index) => (
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
          ))
        ) : (
          <h3 style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>There are no reviews yet</h3>
        )}
      </div>

      <div id="top-reviews-action-buttons">
      <Link to="/reviews">
          <button className="submit-review-btn">
            All Reviews
          </button>
        </Link>
        <Link to="/review" onClick={openModal}>
          <button className="submit-review-btn">
            Submit Review
          </button>
        </Link>
      </div>

      <dialog ref={dialogRef} id="top-reviews-modal" style={{ padding: '20px', borderRadius: '8px', border: '2px solid #3b82f6', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)', width: '50%', maxWidth: '400px', margin: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', color: '#3b82f6', margin: 0 }}>Submit Your Review</h2>
          <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="black">
              <path fillRule="evenodd" d="M12 10.586l-4.95-4.95-1.414 1.414L10.586 12l-4.95 4.95 1.414 1.414L12 13.414l4.95 4.95 1.414-1.414L13.414 12l4.95-4.95-1.414-1.414L12 10.586z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {success && <div style={{ color: 'green', marginBottom: '15px', padding: '8px', width: "100%", borderRadius: "5px", border: "1px solid blue" }}>Review submitted successfully!</div>}
        {submitError && <div style={{ color: 'red', marginBottom: '15px', padding: '8px', width: "100%", borderRadius: "5px", border: "1px solid red" }}>{submitError}</div>}

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
          <div className="rating" style={{ display: 'flex', gap: '10px', cursor: 'pointer' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} onClick={() => setFormData({ ...formData, rating: star })}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill={formData.rating >= star ? '#f59e0b' : '#e5e7eb'}
                  style={{ transition: 'fill 0.2s' }}
                >
                  <path d="M12 .587l3.668 7.571L23.735 9.56l-5.533 5.395 1.305 7.632L12 18.896 5.493 22.587l1.305-7.632L1.265 9.56l8.067-1.402L12 .587z" />
                </svg>
              </span>
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
