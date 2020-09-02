import React from 'react';
import Navigation from '../Navigation/Navigation'
import './header.scss';

const Header = ({
  setCurrentWeek,
  currentWeek,
  toggleVisibleModal
}) => {
  return (
    <header className="header">
      <button className="create-event-button" onClick={() => toggleVisibleModal(true)}>
        <i className="fas fa-plus"></i>
         Create
      </button>
      <Navigation setCurrentWeek={setCurrentWeek} currentWeek={currentWeek} />
    </header>
  )
}

export default Header

