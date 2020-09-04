import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types'; 
import Sidebar from '../Sidebar/Sidebar';
import Day from '../Day/Day';
import { generateWeek } from '../../utils';
import './week.scss';

const Week = ({ 
  events, 
  currentWeek, 
  fetchEvents, 
  onChangeEvent,
  setNewEventData,
  toggleVisibleModal
}) => {
  const week = generateWeek(currentWeek);

  const getEventsInCurrentDay = day => events.filter(({ dateStart }) =>
    moment(dateStart).format('YYYY-MM-DD') === moment(day).format('YYYY-MM-DD'));

  return (
    <div className="calendar__body">
      <Sidebar />
      <div className="calendar__week">
        {week.map((day, idx) =>
          <Day
            key={idx}
            eventsInCurrentDay={getEventsInCurrentDay(day)}
            currentDay={day}
            fetchEvents={fetchEvents}
            setNewEventData={setNewEventData}
            toggleVisibleModal={toggleVisibleModal}
            onChangeEvent={onChangeEvent} />
        )}
      </div>
    </div>
  )
}
Week.propTypes = {
  events: PropTypes.array.isRequired, 
  currentWeek: PropTypes.number.isRequired, 
  fetchEvents: PropTypes.func.isRequired, 
  onChangeEvent: PropTypes.func.isRequired,
  setNewEventData: PropTypes.func.isRequired,
  toggleVisibleModal: PropTypes.func.isRequired,
}

export default Week