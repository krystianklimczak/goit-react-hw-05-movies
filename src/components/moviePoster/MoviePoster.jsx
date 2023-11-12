import React from 'react';
import PropTypes from 'prop-types';

import css from './MoviePoster.module.css';

function MoviePoster(props) {
  const { img, title, overview, score, genres, year } = props;
  return (
    <div className={css.poster}>
      <img
        src={`https://image.tmdb.org/t/p/original${img}`}
        alt={title}
        width={264}
        height={397}
      />
      <div className={css.posterDetails}>
        <h2 className={css.posterTitle}>
          {title} <span className={css.posterTitle__span}>{`(${year})`}</span>
        </h2>
        <p className={css.posterInfo}>User Score: {`${score * 10}%`}</p>
        <p className={css.posterInfo}>Overview {overview}</p>
        <div className={css.posterInfo}>
          <p className={css.posterGenres}>Genres:</p>
          <ul className={css.posterList}>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

MoviePoster.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  year: PropTypes.number.isRequired,
};

export default MoviePoster;
