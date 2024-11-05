import axios from 'axios';

const API_KEY = 'ae7662d7'; // OMDB API key
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query, page = 1, type = 'movie') => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        s: query,
        page: page,
        type: type,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        i: id,
        plot: 'full',
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
