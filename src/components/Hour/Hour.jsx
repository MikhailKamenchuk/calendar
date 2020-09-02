import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Event from '../Event/Event';
import './hour.scss';

const Hour = ({ hour, currentDay, eventData, fetchEvents }) => {
  const [minutes, setMinutes] = useState(moment().format('mm'))

  useEffect(() => {
    const intervalId = setInterval(() =>
      setMinutes(moment().format('mm')), 60000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="calendar__hour">
      {eventData ? <Event eventData={eventData} fetchEvents={fetchEvents} /> : null}
      {moment(currentDay).hour(hour).format('DD MM YYYY HH') === moment().format('DD MM YYYY HH')
        ? <div className='calendar__hour__red-line' style={{ top: `${minutes}px` }}></div>
        : null
      }
    </div>
  )
}

export default Hour