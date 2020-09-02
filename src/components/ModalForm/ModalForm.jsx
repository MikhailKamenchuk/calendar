import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { createEvent } from '../../services/gateway'
import './modalForm.scss';

const destructureData = data => {
  const dateStart = moment(`${data.date} ${data.timeStart}`).format();
  const dateEnd = moment(`${data.date} ${data.timeEnd}`).format();
  return {
    title: data.title,
    description: data.description,
    dateStart,
    dateEnd
  }
}

const ModalForm = ({ isVisibleModal, toggleVisibleModal, fetchEvents }) => {
  
  const [formData, setFormData] = useState({
    title: '',
    date: moment().format('YYYY-MM-DD'),
    timeStart: moment().format('HH:mm'),
    timeEnd: moment().format('HH:mm'),
    description: '',
  }); 

  const { title, date, timeStart, timeEnd, description } = formData;


  useEffect(() => {
    const createEventHandler = e => {
      e.preventDefault();

      createEvent(destructureData(formData))
        .then(() => {
          fetchEvents();
          toggleVisibleModal(false)
        })
        .catch(error => alert(error))
    }
    const formEl = document.querySelector('.create-event__form');
    formEl.addEventListener('submit', createEventHandler);

    return () => formEl.removeEventListener('submit', createEventHandler);
  }, [formData]);


  const modalClassName = !isVisibleModal
    ? 'modal overlay hidden'
    : 'modal overlay';

  return (
    <div className={modalClassName}>
      <div className="modal__content">
        <div className="create-event">
          <button className="close-btn" onClick={() => toggleVisibleModal(false)}>+</button>
          <form className='create-event__form'>
            <input
              type="text"
              name="title"
              className="create-event__field"
              placeholder="Title"
              value={title}
              onChange={e => setFormData({
                ...formData,
                title: e.target.value
              })}
            />
            <div className="create-event__time-block">
              <input
                type="date"
                name="date"
                className="create-event__date-field"
                value={date} 
                onChange={e => setFormData({
                  ...formData,
                  date: e.target.value
                })}
              />
              <input
                type="time"
                name="timeStart"
                className="create-event__date-field"
                step='900'
                value={timeStart}
                onChange={e => setFormData({
                  ...formData,
                  timeStart: e.target.value
                })}
              />
              <span>-</span>
              <input
                type="time"
                name="timeEnd"
                className="create-event__date-field"
                step='900'
                value={timeEnd}
                onChange={e => setFormData({
                  ...formData,
                  timeEnd: e.target.value
                })}
              />
            </div>
            <textarea
              name="description"
              id="" placeholder="Description"
              className="create-event-form__field"
              value={description}
              onChange={e => setFormData({
                ...formData,
                description: e.target.value
              })}
            />
            <button className="create-event__submit-btn" type='submit'>Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalForm