export const calendarData = [
  { day: 'Mon', times: ['10:00'], date: '25' },
  { day: 'Tue', times: ['08:00'], date: '26' },
  { day: 'Wed', times: [], date: '27' },
  { day: 'Thu', times: ['10:00', '11:00', '14:00'], date: '28' },
  { day: 'Fri', times: [], date: '29' },
  { day: 'Sat', times: ['12:00', '16:00'], date: '30' },
  { day: 'Sun', times: ['09:00'], date: '31' },
];

export const appointments = [
  { type: "Dentist", doctor: "Dr. Cameron Williamson", time: "09:00-11:00", icon: "fa-tooth" },
  { type: "Physiotherapy", doctor: "Dr. Kevin Djones", time: "11:00-12:00", icon: "fa-running" },
];

export const upcomingSchedule = [
  {
    day: 'On Thursday',
    appointments: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: 'fa-check-circle', doctor: '' },
      { title: 'Dentist', time: '11:00 - 12:00', icon: 'fa-tooth', doctor: 'Dr. Cameron Williamson' },
      { title: 'Physiotherapy Appointment', time: '14:00 - 15:00', icon: 'fa-running', doctor: 'Dr. Kevin Jones' },
    ],
  },
  {
    day: 'On Saturday',
    appointments: [
      { title: 'Cardiologist', time: '12:00 AM', icon: 'fa-heart', doctor: '' },
      { title: 'Neurologist', time: '16:00 PM', icon: 'fa-brain', doctor: '' },
    ],
  },
];