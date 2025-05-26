import React from 'react';
import { navLinks } from '../data/navLinks';


const Sidebar = () => {
  return (
    <aside className="w-16 sm:w-64 bg-white shadow-md p-4 h-full flex flex-col">
      <h2 className="text-xs sm:text-sm font-semibold text-gray-500 mb-4 hidden sm:block">GENERAL</h2>
      <nav className="flex-1">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className={`flex items-center p-2 mb-2 rounded-lg ${
              link.name === 'Dashboard' ? 'bg-blue-100 text-blue-500' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <i className={`fas ${link.icon} text-lg sm:mr-3`}></i>
            <span className="hidden sm:block">{link.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;