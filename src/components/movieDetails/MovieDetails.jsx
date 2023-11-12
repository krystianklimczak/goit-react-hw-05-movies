import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Loader from 'components/loader/Loader';
import { getMovieDetails } from 'api/getMovieDetails';
import MoviePoster from 'components/moviePoster/MoviePoster';
import GoBackButton from 'components/goBackButton/GoBackButton';

import css from './MovieDetails.module.css';

function MovieDetails() {
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const [from, setFrom] = useState();
  const [movieId] = useState(location.state.movieId);

  useEffect(() => {
    async function fetchDetails() {
      const data = await getMovieDetails(movieId);
      setMovieDetails({ ...data });
      setFrom(location.state.from);
    }

    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.movieDetails}>
      <GoBackButton from={from} />
      {movieDetails && (
        <MoviePoster
          img={movieDetails.poster_path}
          title={movieDetails.original_title}
          score={movieDetails.vote_average}
          overview={movieDetails.overview}
          genres={movieDetails.genres}
          year={Number(movieDetails.release_date.slice(0, 4))}
        />
      )}
      <ul className={css.movieList}>
        <li>
          <Link
            className={css.movieList__link}
            to="cast"
            state={{ movieId: movieId }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            className={css.movieList__link}
            to="reviews"
            state={{ movieId: movieId }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetails;
