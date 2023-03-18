import React from 'react';
import './calendar.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Scheduler from '../../components/calendar/Schedular';

const Calendar = () => {

  return (
    <div className="cal">
      <Sidebar />
      <div className="calContainer">
        <Navbar title="Calendar" />
        <Scheduler />
      </div>
    </div>
  );
};

export default Calendar;
