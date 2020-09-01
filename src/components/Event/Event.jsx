import React from 'react';
import './event.scss';

const Event = ({ eventData }) => {
  const { title, description, dateStart, dateEnd } = eventData;
  return (
    <div className="event">
      <span className="event__title">{title}</span>
      <span className="event__time">10:00 - 12:00</span>
    </div>
  )
}

export default Event