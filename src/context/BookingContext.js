import React from 'react'

const BookingContext = React.createContext({
  bookingData: [],
  onBookingData: () => {},
  onCancelTrip: () => {},
})

export default BookingContext
