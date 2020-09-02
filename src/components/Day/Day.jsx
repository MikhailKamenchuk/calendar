import React from 'react';
import moment from 'moment';
import Hour from '../Hour/Hour';
import './day.scss';

const Day = ({ currentDay, eventsInCurrentDay, fetchEvents }) => {
  
  const getEventByTime = hour => eventsInCurrentDay.find(({ dateStart }) => {
    return moment(dateStart).format("HH") == hour
  });

  return (
    <div className="calendar__day">
      {[...Array(24).keys()].map(hour => (
        <Hour
          key={hour}
          hour={hour}
          currentDay={currentDay}
          eventData={getEventByTime(hour)}
          fetchEvents={fetchEvents}
        />
      ))}
    </div>
  )
}

export default Day