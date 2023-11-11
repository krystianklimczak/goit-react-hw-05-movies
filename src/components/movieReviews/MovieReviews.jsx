import React from 'react';

function MovieReviews(props) {
  const { reviews } = props;

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h4>{review.author_details.username}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieReviews;
