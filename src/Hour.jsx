import React from 'react';
import Event from './Event';

const Hour = ({event}) => {
  return (
    <div className="calendar__hour">
      {event ? <Event /> : null}
    </div>
  )
}

export default Hour