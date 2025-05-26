import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingSchedule } from '../data/appointments';


const UpcomingSchedule = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-6">The Upcoming Schedule</h3>
      {upcomingSchedule.map((schedule, index) => (
        <div key={index} className="mb-4 sm:mb-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">{schedule.day}</h4>
          <div className="space-y-3">
            {schedule.appointments.map((appt, idx) => (
              <SimpleAppointmentCard key={idx} {...appt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;