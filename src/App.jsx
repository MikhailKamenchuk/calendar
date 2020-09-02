import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Week from './components/Week/Week';
import { getEventsList } from './services/gateway';
import CalendarWeekHeader from './components/CalendarWeekHeader/CalendarWeekHeader';
import ModalForm from './components/ModalForm/ModalForm';

const App = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [events, updateEvents] = useState([]);
  const [isVisibleModal, toggleVisibleModal] = useState(false);

  const fetchEvents = () => getEventsList()
    .then(data => updateEvents(data))
    .catch(error => alert(error))

  useEffect(() => {
    fetchEvents()
  }, [])

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
        />
      </main>
      <ModalForm
        isVisibleModal={isVisibleModal}
        toggleVisibleModal={toggleVisibleModal}
        fetchEvents={fetchEvents}
      />
    </>
  )
}

export default App