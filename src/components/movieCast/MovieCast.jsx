import React from 'react';
import PropTypes from 'prop-types';

import css from './MovieCast.module.css';
import SingleCast from 'components/singleCast/SingleCast';

function MovieCast(props) {
  const { cast } = props;

  return (
    <div>
      <ul className={css.castList}>
        {cast.map(actor => (
          <SingleCast
            id={actor.id}
            profile_path={actor.profile_path}
            name={actor.name}
            character={actor.character}
            key={actor.id}
          />
        ))}
      </ul>
    </div>
  );
}

MovieCast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default MovieCast;
