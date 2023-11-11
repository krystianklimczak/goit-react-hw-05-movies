import axios from 'axios';

const API_KEY = 'a06a593c7417d6d1323759d2907180c8';

export const getMovieByQuery = async query => {
  const URL = 'https://api.themoviedb.org/3/search/movie';
  const searchParams = new URLSearchParams({
    query: query,
    api_key: API_KEY,
    language: 'en-US',
    include_adult: 'false',
  });

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;
  const results = await data.results;

  return results;
};
