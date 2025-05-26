import React from 'react';
import { activityBars } from '../data/activity';


const ActivityFeed = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-4">Activity</h3>
      <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4">3 appointments this week</p>
      <div className="flex justify-between items-end h-16 sm:h-24">
        {activityBars.map((bar, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-2 sm:w-4 ${bar.height} ${bar.color} rounded-t`}></div>
            <p className="text-xs text-gray-500 mt-1 sm:mt-2">{bar.day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;