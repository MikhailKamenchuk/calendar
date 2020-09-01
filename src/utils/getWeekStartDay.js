import moment from 'moment';

export const getWeekStartDay = (currentWeek) => {
  const lastMondayByCurrentDate = moment().day(currentWeek * 7 + 1);
  return lastMondayByCurrentDate
}