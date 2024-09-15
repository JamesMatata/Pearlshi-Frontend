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

  if (reviews.length != 0){
    // Main content for the reviews page
  return (
    <>
      <Helmet>
        <title>All Reviews | Pearlshi Caterers & Event Planners</title>
      </Helmet>
      <body className='bg-[#F5F2FB] w-full mt-[80px] md:mt-[100px] lg:mt-[125px]'>
        <div className="all-reviews-page">
          <h2 className="text-3xl font-bold text-center my-5">All Reviews</h2>
          <div style={{display: 'flex', flexDirection: 'row',gap: '16px',padding: '10px', marginBottom: '50px' }}>
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
  }

  if (reviews.length == 0){
    // Main content for the reviews page
  return (
    <>
      <Helmet>
        <title>All Reviews | Pearlshi Caterers & Event Planners</title>
      </Helmet>
      <body className='bg-[#F5F2FB] w-full mt-[80px] md:mt-[100px] lg:mt-[125px]'>
          <h3 style={{padding: '70px 0', marginBottom: '600px',fontSize: '30px', fontWeight: 'bold', color: '#3b82f6', textAlign: 'center'}}>No Revies have been Made yet</h3>
      </body>
    </>
  );
  }

};

export default AllReviews;
