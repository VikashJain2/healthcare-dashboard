import React from 'react';

const SimpleAppointmentCard = ({ title, time, icon, doctor }) => {
  return (
    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg flex items-center space-x-3 sm:space-x-4">
      <i className={`fas ${icon} text-blue-500 text-lg sm:text-xl`}></i>
      <div>
        <h4 className="text-sm sm:text-md font-semibold text-gray-800">{title}</h4>
        {doctor && <p className="text-xs sm:text-sm text-gray-600">{doctor}</p>}
        <p className="text-xs sm:text-sm text-gray-600">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;