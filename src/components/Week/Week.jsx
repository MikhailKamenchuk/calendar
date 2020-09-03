import React from 'react';
import moment from 'moment';
import Sidebar from '../Sidebar/Sidebar';
import Day from '../Day/Day';
import { generateWeek } from '../../utils';
import './week.scss';

const Week = ({ 
  events, 
  currentWeek, 
  fetchEvents, 
  onChangeEvent
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
            onChangeEvent={onChangeEvent} />
        )}
      </div>
    </div>
  )
}

export default Week