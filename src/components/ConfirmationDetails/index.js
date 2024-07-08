import {useContext} from 'react'
import BookingContext from '../../context/BookingContext'
import './index.css'

const ConfirmationDetails = props => {
  const {onConfirmDetails, onConfirmation, onBookingNewTrip} = props
  const {onBookingData} = useContext(BookingContext)
  const data = onConfirmDetails()

  return (
    <div className="confirm-details-main-container" data-tesid='confirmation'>
      <ul className="confirm-details-container">
        <li className="each-user-details">
          <p className="user-details-title">Name:</p>
          <p className="user-details-value">{data.name}</p>
        </li>
        <li className="each-user-details">
          <p className="user-details-title">Start Loaction:</p>
          <p className="user-details-value">{data.startLocation}</p>
        </li>
        <li className="each-user-details">
          <p className="user-details-title">End Loaction:</p>
          <p className="user-details-value">{data.endLocation}</p>
        </li>
        <li className="each-user-details">
          <p className="user-details-title">Start Date:</p>
          <p className="user-details-value">{data.startDate}</p>
        </li>
        <li className="each-user-details">
          <p className="user-details-title">End Date:</p>
          <p className="user-details-value">{data.endDate}</p>
        </li>
        <li className="each-user-details">
          <p className="user-details-title">Guests:</p>
          <p className="user-details-value">{data.guests}</p>
        </li>
        <li className="each-user-details">
          <p className="user-details-title">Travel Assistance:</p>
          <p className="user-details-value">{data.travelAssistance}</p>
        </li>
      </ul>
      <div className="next-pre-btn-container">
        <button
          type="button"
          className="previous-btn"
          onClick={onBookingNewTrip}
        >
          Cancel
        </button>
        <button
          type="button"
          className="next-btn"
          onClick={() => onConfirmation(onBookingData)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ConfirmationDetails
