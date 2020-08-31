import React from 'react';

const Navigation = () => {
  return (
    <div className="navigation">
        <button className="navigation__today-btn">Today</button>
        <button className="navigation__icon-btn">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="navigation__icon-btn">
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          Jun - Jul 2020
        </span>
      </div>
  )
}

export default Navigation