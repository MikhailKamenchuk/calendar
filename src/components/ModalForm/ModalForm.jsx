import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getEventsList, createEvent } from '../../services/gateway'
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

const ModalForm = ({ isVisibleModal, toggleVisibleModal, fetchEvents, events }) => {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const createEventHandler = e => {
      e.preventDefault();

      const formData = Object.fromEntries([...new FormData(e.target)]);

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
  }, []);

  const modalClassName = !isVisibleModal
    ? 'modal overlay hidden'
    : 'modal overlay';

  return (
    <div className={modalClassName}>
      <div className="modal__content">
        <div className="create-event">
          <button className="close-btn" onClick={() => toggleVisibleModal(false)}>+</button>
          <form className='create-event__form'>
            <input type="text" name="title" className="create-event__field" placeholder="Title" />
            <div className="create-event__time-block">
              <input type="date" name="date" className="create-event__date-field" />
              <input type="time" name="timeStart" className="create-event__date-field" />
              <span>-</span>
              <input type="time" name="timeEnd" className="create-event__date-field" />
            </div>
            <textarea name="description" id="" placeholder="Description" className="create-event-form__field"></textarea>
            <button className="create-event__submit-btn" type='submit'>Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalForm