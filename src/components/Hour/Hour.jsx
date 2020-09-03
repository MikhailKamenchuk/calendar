import React, { useEffect, useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types'; 
import Event from '../Event/Event';
import './hour.scss';

const Hour = ({ 
  hour, 
  currentDay, 
  eventData, 
  fetchEvents, 
  onChangeEvent 
}) => {
  const [minutes, setMinutes] = useState(moment().format('mm'))

  useEffect(() => {
    const intervalId = setInterval(() =>
      setMinutes(moment().format('mm')), 60000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="calendar__hour">
      {eventData
        ? <Event
          eventData={eventData}
          fetchEvents={fetchEvents}
          onChangeEvent={onChangeEvent}/>
        : null}
      {moment(currentDay).hour(hour).format('DD MM YYYY HH') === moment().format('DD MM YYYY HH')
        ? <div className='calendar__hour__red-line' style={{ top: `${minutes}px` }}></div>
        : null
      }
    </div>
  )
}

Hour.propTypes = {
  hour: PropTypes.number.isRequired, 
  currentDay: PropTypes.object.isRequired, 
  eventData: PropTypes.object, 
  fetchEvents: PropTypes.func.isRequired, 
  onChangeEvent: PropTypes.func.isRequired,
}

export default Hour