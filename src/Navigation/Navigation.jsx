import React, { useState } from 'react';
import moment from 'moment';
import { getWeekStartDay } from '../utils/getWeekStartDay'

const Navigation = ({setCurrentWeek, currentWeek}) => {

  const weekStartDay = getWeekStartDay(currentWeek);
  const weekEndDay = moment(weekStartDay).day(7);
  
  const displayCorrectData = format => weekStartDay.format(format) !== weekEndDay.format(format)
  ? `${weekStartDay.format(format)} - ${weekEndDay.format(format)}`
  : `${weekStartDay.format(format)}`;

  const correctMonthsString = displayCorrectData('MMM');
  const correctYearsString = displayCorrectData('YYYY');

  return (
    <div className="navigation">
      <button className="navigation__today-btn" onClick={() => setCurrentWeek(0)}>Today</button>
      <button className="navigation__icon-btn" onClick={() => setCurrentWeek(currentWeek - 1)}>
        <i className="fas fa-chevron-left" />
      </button>
      <button className="navigation__icon-btn" onClick={() => setCurrentWeek(currentWeek + 1)}>
        <i className="fas fa-chevron-right" />
      </button>
      <span className="navigation__displayed-month">
        {`${correctMonthsString} ${correctYearsString}`}
      </span>
    </div>
  )
}

export default Navigation