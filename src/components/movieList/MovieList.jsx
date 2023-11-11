import React from 'react';
import { Link } from 'react-router-dom';

function MovieList(props) {
  const { movies } = props;
  console.log(movies);

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
