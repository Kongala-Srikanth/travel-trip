import './index.css'

const SuccessfulBooking = props => {
  const {onBookingNewTrip} = props
  return (
    <div className="successfully-booking">
      <img
        src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
        alt="success"
        className="successfully-tick-mark"
      />
      <h1 className="awesome-heading">Awesome!</h1>
      <p className="successfully-description">
        Your booking has been confirmed.
      </p>
      <button
        type="button"
        className="new-booking-btn"
        onClick={onBookingNewTrip}
      >
        Book a New Trip
      </button>
    </div>
  )
}

export default SuccessfulBooking
