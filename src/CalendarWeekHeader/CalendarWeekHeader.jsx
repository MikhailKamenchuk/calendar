import React from 'react';
import { getWeekStartDay } from '../utils/getWeekStartDay'

const CalendarWeekHeader = ({ currentWeek }) => {
  const createDayLable = (dayIdInWeek, id) => {
    return (
      <div key={id} className="calendar__day-label">
        <span className="calendar__day-name">
          {getWeekStartDay(currentWeek).day(dayIdInWeek).format("ddd")}
        </span>
        <span className="calendar__day-number">
          {getWeekStartDay(currentWeek).day(dayIdInWeek).format("DD")}
        </span>
      </div>
    )
  }
  return (
    <header className="calendar__header">
      {[...Array(7).keys()].map(dayIdInWeek => createDayLable(dayIdInWeek + 1, dayIdInWeek))}
    </header>
  )
}

export default CalendarWeekHeader