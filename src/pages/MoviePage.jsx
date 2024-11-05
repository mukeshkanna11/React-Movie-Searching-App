// src/pages/MoviePage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError('Failed to fetch movie details');
      }
    };
    fetchMovie();
  }, [id]);

  if (error) return <p className="text-red-500 font-Poppins">{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img src={movie.Poster} alt={movie.Title} className="w-full max-w-md mx-auto font-Poppins" />
      <h1 className="mt-4 text-3xl font-bold font-Poppins">{movie.Title}</h1>
      <p className='text-blue-500'>{movie.Year}</p>
      <p>{movie.Genre}</p>
      <p>{movie.Plot}</p>
      <p>Cast: {movie.Actors}</p>
      <p className='text-red-500'>Rating: {movie.imdbRating}</p>
    </div>
  );
};

export default MoviePage;
