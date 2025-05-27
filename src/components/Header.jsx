import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-blue-500">HealthCare.</h1>
      </div>
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none text-sm sm:text-base w-32 sm:w-48"
          />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
        <i className="fas fa-bell text-gray-600 text-lg sm:text-xl"></i>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm sm:text-base hidden sm:block">User</span>
        </div>
        <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;