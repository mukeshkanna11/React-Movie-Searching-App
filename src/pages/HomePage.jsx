import React, { useState, useEffect } from 'react';
import { searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    try {
      const data = await searchMovies(query, page, type);
      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotalPages(Math.ceil(data.totalResults / 10));
      } else {
        setMovies([]);
        setError(data.Error || 'No movies found');
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError('Failed to fetch movies');
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch();
    }
  }, [query, page, type]);

  return (
    <div className="max-w-screen-xl p-6 mx-auto">
      {/* Search Section */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="mb-4 text-2xl italic font-bold font-poppins">Welcome to Movie Search</h1>
        <div className="w-full max-w-lg space-y-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Select Box */}
          <select
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 text-lg italic border border-gray-300 rounded-lg shadow-lg font-poppins focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
          </select>
        </div>
      </div>

      {/* Error Handling */}
      {error && <p className="italic text-center text-red-500 font-poppins">{error}</p>}

      {/* Movies Grid Section */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {/* Pagination Section */}
      {movies.length > 0 && (
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      )}
    </div>
  );
};

export default HomePage;
