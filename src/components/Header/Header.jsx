import React from 'react';
import Navigation from '../Navigation/Navigation'
import './header.scss';

const Header = ({setCurrentWeek, currentWeek}) => {
  return (
    <header className="header">
      <button className="create-event-button">
        <i className="fas fa-plus"></i>
            Create
        </button>
      <Navigation setCurrentWeek={setCurrentWeek} currentWeek={currentWeek}/>
    </header>
  )
}

export default Header

