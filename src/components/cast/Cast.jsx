import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { getMovieCast } from 'api/getMovieCast';
import MovieCast from 'components/movieCast/MovieCast';

function Cast() {
  const location = useLocation();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      const cast = await getMovieCast(location.state.movieId);
      setCast([...cast]);
    }
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>{cast && <MovieCast cast={cast} />}</div>;
}

export default Cast;
