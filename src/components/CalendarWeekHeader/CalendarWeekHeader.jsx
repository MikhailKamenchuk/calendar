import React from 'react';
import {  generateWeek } from '../../utils';
import './calendarWeekHeader.scss';



const CalendarWeekHeader = ({ currentWeek }) => {
  const week = generateWeek(currentWeek);

  return (
    <header className="calendar__header">
      {week.map((day, idx) => (
        <div key={idx} className="calendar__day-label">
          <span className="calendar__day-name">
            {day.format("ddd")}
          </span>
          <span className="calendar__day-number">
            {day.format("DD")}
          </span>
        </div>
      ))}
    </header>
  )
}

export default CalendarWeekHeader