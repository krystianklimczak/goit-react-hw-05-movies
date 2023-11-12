import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getMovieReviews } from 'api/getMovieReviews';
import MovieReviews from 'components/movieReviews/MovieReviews';

function Reviews() {
  const location = useLocation();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    async function fetchReviews() {
      const reviews = await getMovieReviews(location.state.movieId);
      setReviews([...reviews]);
    }
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{reviews && <MovieReviews reviews={reviews} />}</div>;
}

export default Reviews;
