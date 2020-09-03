import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types'; 
import Hour from '../Hour/Hour';
import './day.scss';

const Day = ({ 
  currentDay, 
  eventsInCurrentDay, 
  fetchEvents, 
  onChangeEvent
}) => {
  
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
          onChangeEvent={onChangeEvent}
        />
      ))}
    </div>
  )
}

Day.propTypes = {
  currentDay: PropTypes.object.isRequired, 
  eventsInCurrentDay: PropTypes.array.isRequired, 
  fetchEvents: PropTypes.func.isRequired, 
  onChangeEvent: PropTypes.func.isRequired,
}

export default Day