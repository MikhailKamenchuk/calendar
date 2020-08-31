import React, { useState } from 'react';
import Header from './Header';
import Week from './Week';
import Sidebar from './Sidebar';


const App = () => {

  return (
    <>
      <Header></Header>
      <main className="calendar">
        <header className="calendar__header">
          <div className="calendar__day-label">
            <span className="calendar__day-name">Mon</span>
            <span className="calendar__day-number">27</span>
          </div>
          <div className="calendar__day-label">
            <span className="calendar__day-name">Mon</span>
            <span className="calendar__day-number">27</span>
          </div>
          <div className="calendar__day-label">
            <span className="calendar__day-name">Mon</span>
            <span className="calendar__day-number">27</span>
          </div>
          <div className="calendar__day-label">
            <span className="calendar__day-name">Mon</span>
            <span className="calendar__day-number">27</span>
          </div>
          <div className="calendar__day-label">
            <span className="calendar__day-name">Mon</span>
            <span className="calendar__day-number">27</span>
          </div>
          <div className="calendar__day-label">
            <span className="calendar__day-name">Mon</span>
            <span className="calendar__day-number">27</span>
          </div>
          <div className="calendar__day-label">
            <span className="calendar__day-name">Mon</span>
            <span className="calendar__day-number">27</span>
          </div>
        </header>
        <div className="calendar__body">
          <Sidebar />
          <Week />
        </div>
      </main>
    </>
  )
}

export default App