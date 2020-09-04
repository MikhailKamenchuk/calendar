import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Hour from '../Hour/Hour';
import './day.scss';

const Day = ({
  currentDay,
  eventsInCurrentDay,
  fetchEvents,
  onChangeEvent,
  setNewEventData,
  toggleVisibleModal
}) => {

  const getEventByTime = hour => eventsInCurrentDay.find(({ dateStart }) => {
    return moment(dateStart).format("HH") == hour
  });

  const createEvent = e => {
    const { date } = e.target.dataset
    const dataInfForNewEvent = {
      title: '',
      description: '',
      date: moment(date).format('YYYY-MM-DD'),
      timeStart: moment(date).format('HH:mm'),
      timeEnd: moment(date).add(1, 'hours').format('HH:mm'),
    }
    setNewEventData(dataInfForNewEvent)
    toggleVisibleModal(true)
  }

  return (
    <div className="calendar__day" onClick={createEvent}>
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
  setNewEventData: PropTypes.func.isRequired,
  toggleVisibleModal: PropTypes.func.isRequired,
}

export default Day