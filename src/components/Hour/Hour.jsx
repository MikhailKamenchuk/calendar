import React from 'react';
import Event from '../Event/Event';
import './hour.scss';

const Hour = ({hour, currentDay, eventData}) => {
  return (
    <div className="calendar__hour">
      {eventData ? <Event eventData={eventData}/> : null}
    </div>
  )
}

export default Hour