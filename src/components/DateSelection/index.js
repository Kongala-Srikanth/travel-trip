import {useState} from 'react'
import './index.css'

const DateSelection = props => {
  const {onDateSelection, onPreviousYourDetailsForm, prevData} = props

  let inputStartDate = ''
  let inputEndDate = ''

  if (prevData !== undefined) {
    inputStartDate = prevData.startDate
    inputEndDate = prevData.endDate
  }

  const [errorMsg, setErrorMsg] = useState({
    startDate: '',
    endDate: '',
    dateError: '',
  })

  const [date, setDate] = useState({
    startDate: inputStartDate !== '' ? inputStartDate : '',
    endDate: inputEndDate !== '' ? inputEndDate : '',
  })

  const onSelectStartDate = event => {
    if (event.target.value === '') {
      setErrorMsg(prevErrors => ({
        ...prevErrors,
        startDate: 'Select start date',
      }))
    } else {
      setErrorMsg(prevErrors => ({...prevErrors, startDate: ''}))
    }
    setDate(prevdate => ({
      ...prevdate,
      startDate: event.target.value,
    }))
  }

  const onSelectEndDate = event => {
    if (event.target.value === '') {
      setErrorMsg(prevErrors => ({
        ...prevErrors,
        endDate: 'Select end date',
      }))
    } else {
      setErrorMsg(prevErrors => ({...prevErrors, endDate: ''}))
    }
    setDate(prevdate => ({
      ...prevdate,
      endDate: event.target.value,
    }))
  }

  const onSubmitDateSelection = event => {
    event.preventDefault()

    if (date.startDate !== '' && date.endDate !== '') {
      if (date.startDate <= date.endDate) {
        onDateSelection(date)
      } else {
        setErrorMsg(prevErrors => ({
          ...prevErrors,
          dateError: 'The end date cannot be less than the start date',
        }))
      }
    }

    const inputTripStartDate =
      date.startDate === '' &&
      setErrorMsg(prevErrors => ({
        ...prevErrors,
        startDate: 'Select start date',
      }))

    const inputTripEndDate =
      date.endDate === '' &&
      setErrorMsg(prevErrors => ({
        ...prevErrors,
        endDate: 'Select end date',
      }))
  }

  return (
    <div className="booking-form" data-tesid='date selection'>
      <label className="label-name" htmlFor="startDate">
        Start Date
      </label>
      <input
        type="date"
        className="input-box"
        id="startDate"
        onBlur={onSelectStartDate}
        onChange={onSelectStartDate}
        value={date.startDate}
      />
      {errorMsg.startDate && (
        <p className="booking-error-msg">{errorMsg.startDate}</p>
      )}
      <label className="label-name" htmlFor="endDate">
        End Date
      </label>
      <input
        type="date"
        className="input-box"
        id="endDate"
        onBlur={onSelectEndDate}
        onChange={onSelectEndDate}
        value={date.endDate}
      />
      {errorMsg.endDate && (
        <p className="booking-error-msg">{errorMsg.endDate}</p>
      )}
      {errorMsg.dateError && (
        <p className="booking-error-msg">{errorMsg.dateError}</p>
      )}
      <div className="next-pre-btn-container">
        <button
          type="button"
          className="previous-btn"
          onClick={onPreviousYourDetailsForm}
        >
          Previous
        </button>
        <button
          type="button"
          className="next-btn"
          onClick={onSubmitDateSelection}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default DateSelection
