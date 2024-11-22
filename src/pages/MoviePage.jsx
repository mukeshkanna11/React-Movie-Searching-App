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

  if (error) return <p className="mt-4 italic font-semibold text-center text-red-500 font-poppins">{error}</p>;
  if (!movie) return <p className="mt-4 italic text-center font-poppins">Loading...</p>;

  return (
    <div className="min-h-screen p-6 italic bg-gray-50 font-poppins">
      <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Movie Poster */}
          <div className="flex items-center justify-center col-span-1 p-4">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
              alt={movie.Title}
              className="w-full h-auto max-w-xs rounded-lg shadow-lg"
            />
          </div>

          {/* Movie Details */}
          <div className="col-span-2 p-4">
            <h1 className="mb-2 text-3xl font-bold text-gray-800 font-poppins">{movie.Title}</h1>
            <p className="mb-1 text-gray-600"><strong>Year:</strong> {movie.Year || 'N/A'}</p>
            <p className="mb-1 text-gray-600"><strong>Genre:</strong> {movie.Genre || 'N/A'}</p>
            <p className="mb-1 text-gray-600"><strong>Plot:</strong> {movie.Plot || 'N/A'}</p>
            <p className="mb-1 text-gray-600"><strong>Cast:</strong> {movie.Actors || 'N/A'}</p>
            <p className="mb-1 text-gray-600">
              <strong>Rating:</strong>{' '}
              <span className="text-red-500">{movie.imdbRating || 'N/A'}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
