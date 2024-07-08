import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import MyTripsItems from '../MyTripsItems'
import BookingContext from '../../context/BookingContext'
import './index.css'

const MyTrips = () => {
  const {bookingData} = useContext(BookingContext)

  const noTrips = () => (
    <div className="no-trips-container">
      <img
        src="https://res.cloudinary.com/dxgjs0mtb/image/upload/v1719118907/Frame_1000003903_3x_pacps5.png"
        alt="no trips"
        className="no-trip-image"
      />
      <p className="no-trip-heading">No upcoming trips</p>
      <p className="no-trip-description">
        When you book a trip, you will see your trip details here.
      </p>
      <Link to="/book-a-new-trip" className="link">
        <button type="button" className="my-trip-booking-trip-btn">
          Book a new trip
        </button>
      </Link>
    </div>
  )

  const renderTrips = () => (
    <>
      <Header />
      {bookingData.length === 0 ? (
        noTrips()
      ) : (
        <>
          <p className="my-trip-heading">My Trips</p>
          <ul className="my-trips-container">
            {bookingData.map(each => (
              <MyTripsItems key={each.id} trip={each} />
            ))}
          </ul>
        </>
      )}
    </>
  )
  return renderTrips()
}

export default MyTrips
