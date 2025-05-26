import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 bg-gray-100 overflow-auto">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col space-y-4 sm:space-y-6">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="w-full lg:w-1/3">
              <AnatomySection />
            </div>
            <div className="w-full lg:w-2/3">
              <HealthStatusCards />
            </div>
          </div>
        <ActivityFeed />
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-6">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
      <div className="mt-4 sm:mt-6">
      </div>
    </main>
  );
};

export default DashboardMainContent;