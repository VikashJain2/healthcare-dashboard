import React from 'react';
import { healthData } from '../data/healthData';



const HealthStatusCards = () => {
  return (
    <div className="flex-1 flex flex-col space-y-3 sm:space-y-4">
      {healthData.map((data, index) => (
        <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-2">
            <i className={`fas ${data.icon} text-xl sm:text-2xl ${data.color}`}></i>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">{data.part}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{data.date}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className={`bg-${data.status}-500 h-2.5 rounded-full`} style={{ width: data.width }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;