import { getMovieReviews } from 'api/getMovieReviews';
import MovieReviews from 'components/movieReviews/MovieReviews';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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

// import { getMovieCast } from 'api/getMovieCast';
// import MovieCast from 'components/movieCast/MovieCast';
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function Cast() {
//   const location = useLocation();
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     async function fetchCast() {
//       const cast = await getMovieCast(Number(location.pathname.slice(8, 14)));
//       setCast([...cast]);
//     }
//     fetchCast();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return <div>{cast && <MovieCast cast={cast} />}</div>;
// }

// export default Cast;
