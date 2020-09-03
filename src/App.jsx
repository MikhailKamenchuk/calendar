import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import { getEventsList } from './services/gateway';
import Week from './components/Week/Week';
import CalendarWeekHeader from './components/CalendarWeekHeader/CalendarWeekHeader';
import ModalForm from './components/ModalForm/ModalForm';

const App = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [events, updateEvents] = useState([]);
  const [isVisibleModal, toggleVisibleModal] = useState(false);
  const [idOfTheEventToCahnge, setIdOfTheEventToCahnge] = useState(null);
  const [targetModalForm, setTargetModalForm] = useState('create')

  const fetchEvents = () => getEventsList()
    .then(data => updateEvents(data))
    .catch(error => alert(error))

  useEffect(() => {
    fetchEvents()
  }, [])

  const onChangeEvent = id => {
    setIdOfTheEventToCahnge(id),
    toggleVisibleModal(true),
    setTargetModalForm('update')
  }

  const reset = () => {
    toggleVisibleModal(false);
    setTargetModalForm('create');
    setIdOfTheEventToCahnge(null)
  }

  return (
    <>
      <Header
        setCurrentWeek={setCurrentWeek}
        currentWeek={currentWeek}
        toggleVisibleModal={toggleVisibleModal}
      />
      <main className="calendar">
        <CalendarWeekHeader currentWeek={currentWeek} />
        <Week
          events={events}
          currentWeek={currentWeek}
          fetchEvents={fetchEvents}
          onChangeEvent={onChangeEvent}
        />
      </main>
      <ModalForm
        isVisibleModal={isVisibleModal}
        reset={reset}
        fetchEvents={fetchEvents}
        idOfTheEventToCahnge={idOfTheEventToCahnge}
        targetModalForm={targetModalForm}
      />
    </>
  )
}

export default App