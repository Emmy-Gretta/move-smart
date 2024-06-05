import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const Calendara = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <DatePicker
          onChange={setDate}
          value={date}
          calendarClassName="react-calendar"
          className="react-date-picker"
        />
      </div>
    </div>
  );
};

export default Calendara;
