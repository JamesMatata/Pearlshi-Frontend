import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // For managing the page title
import ReviewCard from '../Components/Review/ReviewCard'; // Assuming ReviewCard is in the same folder

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch reviews from the backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/reviews/');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        console.log('Reviews Data:', data); // Debugging: Log fetched data
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error); // Debugging: Log error
        setError(error.message);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // If still loading, show loading text
  if (loading) {
    return (
      <>
        <Helmet>
          <title>All Reviews | Pearlshi Caterers & Event Planners</title>
        </Helmet>
        <div>Loading reviews...</div>
      </>
    );
  }

  // If an error occurred, show error message
  if (error) {
    return (
      <>
        <Helmet>
          <title>All Reviews | Pearlshi Caterers & Event Planners</title>
        </Helmet>
        <div>Error: {error}</div>
      </>
    );
  }

  // Main content for the reviews page
  return (
    <>
      <Helmet>
        <title>All Reviews | Pearlshi Caterers & Event Planners</title>
      </Helmet>
      <body className='bg-[#F5F2FB] w-full mt-[80px] md:mt-[100px] lg:mt-[125px]'>
        <div className="all-reviews-page">
          <h2 className="text-3xl font-bold text-center my-5">All Reviews</h2>
          <div className="reviews-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                orderID={review.booking ? review.booking.booking_id : 'N/A'}  // Check if booking exists
                reviewText={review.review_text}
                rating={review.rating}
              />
            ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default AllReviews;
