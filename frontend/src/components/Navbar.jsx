import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="w-full flex flex-col sm:flex-row sm:justify-between items-center px-4 md:px-16 py-4
 backdrop-blur-md  z-10 sticky top-0">

      {/* Logo Section */}
      <div className="flex justify-center sm:justify-start">
        <Link to="/">
          <img src="/michelle_-removebg-preview.png" alt="Logo" className="w-32 h-32 object-contain" />
        </Link>
      </div>

      {/* Nav Buttons */}
      <nav className="flex flex-wrap gap-4 justify-center sm:justify-start sm:ml-4 mt-4 sm:mt-0">
        <div className="inline-block border-2 border-dotted border-sky-400 relative p-2">
          <span className="text-sky-700 font-semibold">
            <Link to="/category" className="text-gray-700 hover:text-indigo-600">Explore</Link>
          </span>
          {/* Blue dots */}
          <div className="absolute top-0 left-0 w-1 h-1 bg-sky-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-1 h-1 bg-sky-300 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1 h-1 bg-sky-300 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 bg-sky-300 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="inline-block border-2 border-dotted border-sky-400 relative p-2">
          <span className="text-sky-700 font-semibold">
            <Link to="/compare" className="text-gray-700 hover:text-indigo-600">Compare</Link>
          </span>
          <div className="absolute top-0 left-0 w-1 h-1 bg-sky-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-1 h-1 bg-sky-300 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1 h-1 bg-sky-300 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 bg-sky-300 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="inline-block border-2 border-dotted border-sky-400 relative p-2">
          <span className="text-sky-700 font-semibold">
            <Link to="/apis" className="text-gray-700 hover:text-indigo-600">AI API's</Link>
          </span>
          <div className="absolute top-0 left-0 w-1 h-1 bg-sky-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-1 h-1 bg-sky-300 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1 h-1 bg-sky-300 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 bg-sky-300 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
      </nav>

      {/* Explore AI Button */}
      <Link to="/ainews" className="mt-4 sm:mt-0">
        <button className="inline-flex items-center bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-900 transition">
          SomeThing New
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </Link>
    </header>
  );
}

export default Navbar;
