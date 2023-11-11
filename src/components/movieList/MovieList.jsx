import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MovieList(props) {
  const location = useLocation();
  const { movies } = props;

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location, movieId: movie.id }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
