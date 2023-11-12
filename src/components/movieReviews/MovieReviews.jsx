import React from 'react';
import PropTypes from 'prop-types';

import css from './MovieReviews.module.css';
import SingleReview from 'components/singleReview/SingleReview';

function MovieReviews(props) {
  const { reviews } = props;

  return (
    <div>
      <ul className={css.reviewsList}>
        {reviews.map(review => (
          <SingleReview
            key={review.id}
            id={review.id}
            username={review.author_details.username}
            content={review.content}
          />
        ))}
      </ul>
    </div>
  );
}

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author_details: PropTypes.shape({
        username: PropTypes.string.isRequired,
      }),
    })
  ),
};

export default MovieReviews;
