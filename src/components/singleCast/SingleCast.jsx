import React from 'react';
import PropTypes from 'prop-types';

import css from './SingleCast.module.css';

function SingleCast(props) {
  const { id, profile_path, name, character } = props;

  return (
    <li key={id} className={css.castItem}>
      {profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/original${profile_path}`}
          alt={name}
          width={132}
          height={199}
        />
      ) : (
        <img
          src={`https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/No_picture_available.png/401px-No_picture_available.png`}
          alt={'missing actor pictures'}
          width={132}
          height={199}
        />
      )}
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </li>
  );
}

SingleCast.propTypes = {
  id: PropTypes.number.isRequired,
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default SingleCast;
