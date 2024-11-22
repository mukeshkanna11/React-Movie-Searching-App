import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 shadow-xl bg-gradient-to-r from-blue-600 to-purple-500 font-poppins">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center text-2xl font-bold text-white hover:text-yellow-300">
          {/* Optional movie logo or icon here */}
          <span className="mr-2 text-3xl">🎬</span> Movie Search
        </Link>

        {/* Hamburger menu icon */}
        <button
          onClick={toggleMenu}
          className="text-3xl text-white md:hidden focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation links */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 ${isMenuOpen ? 'flex' : 'hidden'}`}
        >
          <Link
            to="/movies"
            className="px-4 py-2 mt-2 font-semibold text-white transition duration-200 hover:text-yellow-300 hover:underline md:mt-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Movies
          </Link>
          {/* Add more movie-related links if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
