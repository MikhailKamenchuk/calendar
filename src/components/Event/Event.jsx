import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { deleteEvent } from '../../services/gateway'
import './event.scss';

const EvetTooltip = ({ visibleTooltip, id, fetchEvents }) => {
  useEffect(() => {

    const deleteEventHandler = () => {
      // debugger;
      deleteEvent(id)
        .then(() => fetchEvents())
        .catch(error => alert(error))
    }
    const eventDelEl = document.querySelector('.event__delete-tooltip');
    eventDelEl.addEventListener('click', deleteEventHandler);
    return () => eventDelEl.removeEventListener('click', deleteEventHandler);

  });

  return (
    <div
      className="event__delete-tooltip"
    >
      Delete
    </div>
  )
}

const Event = ({ fetchEvents, eventData }) => {
  const [visibleTooltip, toggleVisibleTooltip] = useState(false);

  const { id, title, description, dateStart, dateEnd } = eventData;
  const from = moment(dateStart).format('HH:mm');
  const to = moment(dateEnd).format('HH:mm');

  return (
    <div className="event"  >
      <button
        className='event__close-btn close-btn'
        onClick={() => toggleVisibleTooltip(true)}

      >+</button>
      <div className="event__title">{title}</div>
      <div className="event__time">{`${from} - ${to}`}</div>
      <div className='event__description'>{description}</div>
      {visibleTooltip && <EvetTooltip visibleTooltip={visibleTooltip} id={id} fetchEvents={fetchEvents} />}
    </div>
  )
}

export default Event