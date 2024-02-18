
import React, { useState } from 'react'
import "./review.css"
import StarRatingComponent from 'react-star-rating-component';


const Revieww = ({rating}) => {

  const [name, setName] = useState("");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ text: '', rating: 0 });

  const handleTextChange = (e) => {
    setNewReview({ ...newReview, text: e.target.value });
  };

  const handleRatingChange = (nextValue) => {
    setNewReview({ ...newReview, rating: nextValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ text: '', rating: 0 });
  };

  return (
      <>
       <div className='Container-f'>
      <h1 className='txt'>Public Reviews</h1>
      <div>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.text}</p>
            <StarRatingComponent className="star"
              name={`rating-${index}`}
              starCount={4}
              value={review.rating}
              editing={false}
            />
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
      <input
          
          className='name-input'
          value={name.text}
          onChange={handleTextChange}
          placeholder="Enter your name"
          required
        ></input>
        <textarea
          value={newReview.text}
          onChange={handleTextChange}
          placeholder="Enter your review"
          required
        ></textarea>
        <StarRatingComponent
          name="rating"
          starCount={5}
          value={newReview.rating}
          onStarClick={handleRatingChange}
        />
        <button type="submit">Add Review</button>
      </form>
    </div>
      </>
  )
}

export default Revieww