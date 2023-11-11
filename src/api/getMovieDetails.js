import axios from 'axios';

const API_KEY = 'a06a593c7417d6d1323759d2907180c8';

export const getMovieDetails = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}`;
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;

  return data;
};
