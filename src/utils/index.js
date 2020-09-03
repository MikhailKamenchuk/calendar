import moment from 'moment';

export const getWeekStartDay = (currentWeek) => {
  const lastMondayByCurrentDate = moment().day(currentWeek * 7 + 1);
  return lastMondayByCurrentDate
};

export const generateWeek = currentWeek =>
  [...Array(7).keys()].map(dayIdInWeek =>
    getWeekStartDay(currentWeek).day(dayIdInWeek + 1));

export const destructureDataForServer = eventData => {
  const { title, description, date, timeStart, timeEnd } = eventData;
  const dateStart = moment(`${date} ${timeStart}`).format();
  const dateEnd = moment(`${date} ${timeEnd}`).format();
  return {
    title,
    description,
    dateStart,
    dateEnd
  }
};

export const destructureDataForRender = eventData => {
  const { title, description, dateStart, dateEnd } = eventData;
  return {
    title,
    date: moment(dateStart).format('YYYY-MM-DD'),
    timeStart: moment(dateStart).format('HH:mm'),
    timeEnd: moment(dateEnd).format('HH:mm'),
    description,
  }
};