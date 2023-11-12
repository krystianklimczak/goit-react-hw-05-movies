import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import css from './MovieList.module.css';

function MovieList(props) {
  const location = useLocation();
  const { movies } = props;

  return (
    <div>
      <ul className={css.movieList}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location, movieId: movie.id }}
              className={css.movieList__link}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
