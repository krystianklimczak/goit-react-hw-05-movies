import { getMovieByQuery } from 'api/getMovieByQuery';
import MovieList from 'components/movieList/MovieList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  async function handleSubmit(evt) {
    evt.preventDefault();

    const form = evt.currentTarget;
    const query = form.elements.query.value;

    setSearchParams({ query: query });

    form.reset();
  }

  useEffect(() => {
    async function fetchMovies() {
      const query = searchParams.get('query');

      if (!query) {
        return;
      }

      const results = await getMovieByQuery(query);
      setMovies([...results]);
    }
    fetchMovies();
  }, [searchParams]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="query" />
        <button type="sumbit">Search</button>
      </form>
      {movies && <MovieList movies={movies} />}
    </div>
  );
}

export default Movies;
