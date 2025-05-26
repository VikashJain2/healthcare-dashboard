import React from 'react';

// const anatomyIndicators = [
//   { label: 'Healthy Heart', icon: 'fa-heart', status: 'green', position: 'top-20 left-1/2' },
//   { label: 'Healthy Log', icon: 'fa-bolt', status: 'green', position: 'bottom-20 left-1/2' },
// ];

const AnatomySection = () => {
  return (
    <div className="relative h-full bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <img
        src="./musculoskeletal-system.jpg"
        alt="Anatomical Illustration"
        className="mx-auto w-32 sm:w-48 h-full object-cover"
      />
      {/* {anatomyIndicators.map((indicator, index) => (
        <div
          key={index}
          className={`absolute ${indicator.position} flex items-center space-x-2 transform -translate-x-1/2`}
        >
          <i className={`fas ${indicator.icon} text-xl text-green-500`}></i>
          <span className="text-xs sm:text-sm text-gray-700 bg-teal-100 px-2 py-1 rounded">{indicator.label}</span>
        </div>
      ))} */}
      <i className="fas fa-search absolute top-5 left-5 text-gray-400"></i>
    </div>
  );
};

export default AnatomySection;