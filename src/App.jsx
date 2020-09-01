import React, { useState } from 'react';
import Header from './components/Header/Header';
import Week from './components/Week/Week';
import {getWeekStartDay} from './utils';
import CalendarWeekHeader from './components/CalendarWeekHeader/CalendarWeekHeader';

const initialEvents = [
    {
      "id": "1",
      "dateStart": "2020-09-02T10:00:00+03:00",
      "dateEnd": "2020-09-02T11:00:00+03:00",
      "title": "Refined Wooden Cheese",
      "description": "incentivize"
    },
    {
      "id": "2",
      "dateStart": "2020-09-03T13:00:00+03:00",
      "dateEnd": "2020-09-03T13:30:00+03:00",
      "title": "Vermont",
      "description": "background Shirt hack"
    },
    {
      "id": "3",
      "dateStart": "2020-09-01T19:45:00+03:00",
      "dateEnd": "2020-09-01T20:00:00+03:00",
      "title": "recontextualize",
      "description": "Brand distributed"
    },
    {
      "id": "4",
      "dateStart": "2020-09-05T10:00:00+03:00",
      "dateEnd": "2020-09-05T10:15:00+03:00",
      "title": "copying",
      "description": "compress IB Fantastic Metal Salad"
    },
    {
      "id": "5",
      "dateStart": "2020-09-02T04:00:00+03:00",
      "dateEnd": "2020-09-02T05:00:00+03:00",
      "title": "Chair",
      "description": "Berkshire"
    },
];

const generateWeek = currentWeek =>
    [...Array(7).keys()].map(dayIdInWeek =>
      getWeekStartDay(currentWeek).day(dayIdInWeek + 1))

const App = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [events, updateEvents] = useState(initialEvents);
  
  return (
    <>
      <Header setCurrentWeek={setCurrentWeek} currentWeek={currentWeek}></Header>
      <main className="calendar">
        <CalendarWeekHeader currentWeek={currentWeek} />
        <Week events={events} currentWeek={currentWeek} />
      </main>
    </>
  )
}

export default App