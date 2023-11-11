import { getMovieCast } from 'api/getMovieCast';
import MovieCast from 'components/movieCast/MovieCast';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Cast() {
  const location = useLocation();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      const cast = await getMovieCast(Number(location.pathname.slice(8, 14)));
      setCast([...cast]);
    }
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>{cast && <MovieCast cast={cast} />}</div>;
}

export default Cast;
