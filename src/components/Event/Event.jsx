import React, {  useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types'; 
import EvetTooltip from './EventTooltip';
import './event.scss';

const Event = ({
  fetchEvents,
  eventData,
  onChangeEvent
}) => {
  const [visibleTooltip, toggleVisibleTooltip] = useState(false);

  const { id, title, description, dateStart, dateEnd } = eventData;

  const from = moment(dateStart).format('HH:mm');
  const to = moment(dateEnd).format('HH:mm');

  return (
    <div className="event" >
      <button
        className='event__close-btn close-btn'
        onClick={() => toggleVisibleTooltip(!visibleTooltip)}
      >+</button>
      <div className='event__content' onClick={() => onChangeEvent(id)}>
        <div className="event__title">{title}</div>
        <div className="event__time">{`${from} - ${to}`}</div>
        <div className='event__description'>{description}</div>
      </div>
      {visibleTooltip &&
        <EvetTooltip
          id={id}
          fetchEvents={fetchEvents}
          toggleVisibleTooltip={toggleVisibleTooltip}
        />}
    </div>
  )
}

Event.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  eventData: PropTypes.object.isRequired,
  onChangeEvent: PropTypes.func.isRequired,
}


export default Event