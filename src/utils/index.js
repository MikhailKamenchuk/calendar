import moment from 'moment';

export const getWeekStartDay = (currentWeek) => {
  const lastMondayByCurrentDate = moment().day(currentWeek * 7 + 1);
  return lastMondayByCurrentDate
}

export const generateWeek = currentWeek =>
  [...Array(7).keys()].map(dayIdInWeek =>
    getWeekStartDay(currentWeek).day(dayIdInWeek + 1))