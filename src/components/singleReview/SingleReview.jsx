import React from 'react';
import PropTypes from 'prop-types';

import css from './SingleReview.module.css';

function SingleReview(props) {
  const { id, username, content } = props;
  return (
    <li key={id} className={css.reviewsItem}>
      <h4 className={css.reviewsItem__author}>{username}</h4>
      <p className={css.reviewsItem__content}>{content}</p>
    </li>
  );
}

SingleReview.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default SingleReview;
