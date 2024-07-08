import {useContext} from 'react'
import BookingContext from '../../context/BookingContext'
import './index.css'

const MyTripsItems = props => {
  const {trip} = props
  const {id, startDate, endDate, endLocation} = trip
  const {onCancelTrip} = useContext(BookingContext)

  return (
    <li className="each-trip-container">
      <h1 className="my-trip-place-heading">{endLocation}</h1>
      <div>
        <p className="my-trip-date">Date</p>
        <p className="my-trip-full-date">
          {startDate} to {endDate}
        </p>
      </div>
      <button
        type="button"
        className="my-trip-cancel-btn"
        onClick={() => onCancelTrip(id)}
      >
        Cancel
      </button>
    </li>
  )
}

export default MyTripsItems
