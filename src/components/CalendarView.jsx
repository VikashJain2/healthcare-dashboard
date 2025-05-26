import React from 'react';
import { calendarData } from '../data/appointments';


const CalendarView = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">October 2021</h3>
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <i className="fas fa-chevron-left text-gray-600"></i>
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <i className="fas fa-chevron-right text-gray-600"></i>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center mb-4">
        {calendarData.map((day, index) => (
          <div key={index} className="p-1 sm:p-2">
            <p className="text-xs sm:text-sm text-gray-500">{day.day}</p>
            <p className="text-xs sm:text-sm text-gray-800">{day.date}</p>
            {day.times.map((time, idx) => (
              <p key={idx} className="text-xs text-blue-500 mt-1">{time}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;