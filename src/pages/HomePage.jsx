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
      console.log("API Response:", data); // For debugging
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
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-4 border"
      />
      <select
        onChange={(e) => setType(e.target.value)}
        className="w-full p-2 mb-4 border font-Poppins"
      >
        <option value="">All Types</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>
      {error && <p className="text-red-500 font-Poppins">{error}</p>}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 font-Poppins">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      {movies.length > 0 && (
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      )}
    </div>
  );
};

export default HomePage;
