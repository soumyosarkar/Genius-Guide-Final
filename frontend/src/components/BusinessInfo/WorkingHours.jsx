import { FaClock } from 'react-icons/fa';

function WorkingHours() {
  const hours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <FaClock className="text-primary text-2xl mr-3" />
        <h3 className="text-xl font-semibold">Working Hours</h3>
      </div>
      <div className="space-y-2">
        {hours.map((schedule, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-600">{schedule.day}</span>
            <span className="font-medium">{schedule.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkingHours;