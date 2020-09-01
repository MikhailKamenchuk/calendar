import React, { useState } from 'react';
import Header from './Header/Header';
import Week from './Week/Week';
import Sidebar from './Sidebar/Sidebar';
import CalendarWeekHeader from './CalendarWeekHeader/CalendarWeekHeader';


const App = () => {
  const [currentWeek, setCurrentWeek] = useState(0);

  return (
    <>
      <Header setCurrentWeek={setCurrentWeek} currentWeek={currentWeek}></Header>
      <main className="calendar">
        <CalendarWeekHeader currentWeek={currentWeek}/>
        <div className="calendar__body">
          <Sidebar />
          <Week />
        </div>
      </main>
    </>
  )
}

export default App