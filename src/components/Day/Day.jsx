import React from 'react';
import moment from 'moment';
import Hour from '../Hour/Hour';
import './day.scss';

const Day = ({ currentDay, eventsInCurrentDay }) => {
  const getEventByTime = hour => eventsInCurrentDay.find(({ dateStart }) =>{
    console.log(moment().format());
    return moment(dateStart).format("HH") == hour
  });

  return (
    <div className="calendar__day">
      {[...Array(24).keys()].map((hour, idx) => (
        <Hour
          key={idx}
          hour={hour}
          currentDay={currentDay}
          eventData={getEventByTime(hour)}
        />
      ))}
    </div>
  )
}

export default Day