import React from 'react';
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="header">
      <button className="create-event-button">
        <i className="fas fa-plus"></i>
            Create
        </button>
      <Navigation />
    </header>
  )
}

export default Header

