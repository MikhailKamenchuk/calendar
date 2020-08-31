import React from 'react';
import Hour from './Hour';
import Event from './Event'

const Day = () => {
  return (
    <div className="calendar__day">
      <Hour />
      <Hour />
      <Hour />
      <Hour event={true}/>
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
    </div>
  )
}

export default Day