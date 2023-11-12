import React, { useEffect, useState } from 'react';

import MovieList from 'components/movieList/MovieList';
import { getTrendingMovies } from 'api/getTrendingMovies';

import css from './Home.module.css';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await getTrendingMovies();
      setMovies([...data]);
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className={css.header}>Trending today</h1>
      {movies && <MovieList movies={movies} />}
    </div>
  );
}

export default Home;
