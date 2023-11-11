import { getMovieDetails } from 'api/getMovieDetails';
import GoBackButton from 'components/goBackButton/GoBackButton';
import MoviePoster from 'components/moviePoster/MoviePoster';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function MovieDetails() {
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const [from, setFrom] = useState();

  useEffect(() => {
    async function fetchDetails() {
      const data = await getMovieDetails(
        Number(location.pathname.slice(8, 14))
      );
      setMovieDetails({ ...data });
      setFrom(location.state.from);
    }

    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
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
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default MovieDetails;
