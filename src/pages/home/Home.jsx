import { getTrendingMovies } from 'api/getTrendingMovies';
import MovieList from 'components/movieList/MovieList';
import React, { useEffect, useState } from 'react';

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
      Trending today
      {movies && <MovieList movies={movies} />}
    </div>
  );
}

export default Home;
