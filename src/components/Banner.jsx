import React from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 gap-2 ">
      <h1 className="text-5xl font-bold text-gray-300 mb-3">
        Find your <span className="text-cyan-700">new job </span>today
      </h1>
      <h2 className="text-gray-500 text-lg mb-8">
        Thousands of jobs in the computer, engineering, and technology sectors are waiting for you
      </h2>
      <form className="flex flex-col md:flex-row gap-4">
        <div className="flex md:w-1/2 w-full">
          <div className="relative flex-1 rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position are you looking for"
              className="block w-full py-1.5 pl-10 pr-3 text-white placeholder-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={query}
            />
          </div>
        </div>
        <div className="flex md:w-1/2 w-full">
          <div className="relative flex-1 rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              className="block w-full py-1.5 pl-10 pr-3 text-gray-900 placeholder-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-600 py-2 px-8 text-white rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default Banner;
