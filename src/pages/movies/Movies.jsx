import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByQuery } from 'api/getMovieByQuery';
import MovieList from 'components/movieList/MovieList';

import css from './Movies.module.css';

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
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          name="query"
          className={css.input}
          placeholder="Please fill movie name"
        />
        <button type="sumbit" className={css.button}>
          Search
        </button>
      </form>
      {movies && <MovieList movies={movies} />}
    </div>
  );
}

export default Movies;
