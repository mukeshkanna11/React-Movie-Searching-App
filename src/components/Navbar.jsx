// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 bg-gray-800 shadow-lg">
      <div className="container flex items-center justify-between mx-auto font-Poppins">
        <Link to="/" className="text-2xl font-bold text-white font-Poppins ">
          Movies Search
        </Link>

        {/* Hamburger menu icon (only visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="text-2xl text-white md:hidden font-Poppins focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation links */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <Link
            to="/movies"
            className="px-4 py-2 mt-2 text-white transition duration-200 font-Poppins hover:text-gray-300 md:mt-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
