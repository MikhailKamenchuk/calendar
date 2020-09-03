import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { destructureDataForServer, destructureDataForRender } from '../../utils';
import { createEvent, getEvent, updateEvent } from '../../services/gateway';
import './modalForm.scss';

const initialFormData = {
  title: '',
  date: moment().format('YYYY-MM-DD'),
  timeStart: moment().format('HH:mm'),
  timeEnd: moment().format('HH:mm'),
  description: '',
}

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: initialFormData
    }
  }

  componentDidMount() {
    const formEl = document.querySelector('.create-event__form');
    formEl.addEventListener('submit', this.createEventHandler);
  }

  componentDidUpdate(prevProps) {
    if (this.props.idOfTheEventToCahnge !== prevProps.idOfTheEventToCahnge) {
      getEvent(this.props.idOfTheEventToCahnge)
        .then(data => this.setState({ formData: destructureDataForRender(data) }))
        .catch(error => alert(error));
    }
  }

  componentWillUnmount() {
    const formEl = document.querySelector('.create-event__form');
    formEl.removeEventListener('submit', this.createEventHandler);
  }

  fetchEvent = id => getEvent(id)
    .then(data => this.setState({ formData: destructureDataForRender(data) }))
    .catch(error => alert(error));

  handleChangeFormInput = e => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  handleChangeEvent = () => {
    const {
      idOfTheEventToCahnge,
      reset,
      fetchEvents
    } = this.props;

    updateEvent(idOfTheEventToCahnge, destructureDataForServer(this.state.formData))
      .then(() => {
        fetchEvents();
        reset();
      })
      .catch(error => alert(error))
  }

  createEventHandler = e => {
    e.preventDefault();
    createEvent(destructureDataForServer(this.state.formData))
      .then(() => {
        this.props.fetchEvents();
        this.props.reset();
        this.setState({ formData: initialFormData })
      })
      .catch(error => alert(error))
  }

  render() {
    const { title, date, timeStart, timeEnd, description } = this.state.formData;
    const modalClassName = !this.props.isVisibleModal
      ? 'modal overlay hidden'
      : 'modal overlay';

    return (
      <div className={modalClassName}>
        <div className="modal__content">
          <div className="create-event">
            <button className="close-btn" onClick={() => {
              this.props.reset();
              this.setState({ formData: initialFormData });
            }}>+</button>
            <form className='create-event__form'>
              <input
                type="text"
                name="title"
                className="create-event__field"
                placeholder="Title"
                value={title}
                onChange={this.handleChangeFormInput}
              />
              <div className="create-event__time-block">
                <input
                  type="date"
                  name="date"
                  className="create-event__date-field"
                  value={date}
                  onChange={this.handleChangeFormInput}
                />
                <input
                  type="time"
                  name="timeStart"
                  className="create-event__date-field"
                  step='900'
                  value={timeStart}
                  onChange={this.handleChangeFormInput}
                />
                <span>-</span>
                <input
                  type="time"
                  name="timeEnd"
                  className="create-event__date-field"
                  step='900'
                  value={timeEnd}
                  onChange={this.handleChangeFormInput}
                />
              </div>
              <textarea
                name="description"
                id="" placeholder="Description"
                className="create-event-form__field"
                value={description}
                onChange={this.handleChangeFormInput}
              />
              {this.props.targetModalForm === 'update'
                ? <button
                    className="create-event__submit-btn"
                    onClick={this.handleChangeEvent}>Update</button>
                : <button className="create-event__submit-btn" type='submit'>Save</button>
              }
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalForm