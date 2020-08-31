import React from 'react';

const ModalForm = () => {
  return (
    <div className="modal overlay hidden">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn">+</button>
          <form>
            <input type="text" name="title" className="create-event__field" placeholder="Title" />
            <div className="create-event__time-block">
              <input type="date" className="create-event__date-field" />
              <input type="time" className="create-event__date-field" />
              <span>-</span>
              <input type="time" className="create-event__date-field" />
            </div>
            <textarea name="description" id="" placeholder="Description" className="create-event-form__field"></textarea>
            <button className="create-event__submit-btn">Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalForm