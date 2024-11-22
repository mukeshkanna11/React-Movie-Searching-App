// src/components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="overflow-hidden italic bg-white rounded-md shadow-md font-poppins">
      <img src={movie.Poster} alt={movie.Title} className="object-cover w-full h-64" />
      <div className="p-4">
        <h3 className="text-lg italic font-bold font-poppins">{movie.Title}</h3>
        <p>{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className="italic text-blue-500 font-poppins">View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
