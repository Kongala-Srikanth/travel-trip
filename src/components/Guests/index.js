import {useState} from 'react'

import './index.css'

const Guests = props => {
  const {onSeatsBooking, onPreviousDateSelectionForm, prevData} = props

  let inputAdults = 1
  let inputChildrens = 0
  let inputInfants = 0
  if (prevData !== undefined) {
    inputAdults = prevData.adults
    inputChildrens = prevData.children
    inputInfants = prevData.infants
  }

  const [guests, setGuests] = useState({
    adults: inputAdults > 1 ? inputAdults : 1,
    children: inputChildrens > 0 ? inputChildrens : 0,
    infants: inputInfants > 0 ? inputInfants : 0,
  })

  const onSelectAdultsInc = () => {
    setGuests(prevGuests => ({
      ...prevGuests,
      adults: prevGuests.adults + 1,
    }))
  }

  const onSelectAdultsDec = () => {
    setGuests(prevGuests => ({
      ...prevGuests,
      adults: prevGuests.adults > 1 ? prevGuests.adults - 1 : 1,
    }))
  }

  const onSelectChildrensInc = () => {
    setGuests(prevGuests => ({
      ...prevGuests,
      children: prevGuests.children + 1,
    }))
  }

  const onSelectChildrensDec = () => {
    setGuests(prevGuests => ({
      ...prevGuests,
      children: prevGuests.children > 0 ? prevGuests.children - 1 : 0,
    }))
  }

  const onSelectInfantsInc = () => {
    setGuests(prevGuests => ({
      ...prevGuests,
      infants: prevGuests.infants + 1,
    }))
  }

  const onSelectInfantsDec = () => {
    setGuests(prevGuests => ({
      ...prevGuests,
      infants: prevGuests.infants > 0 ? prevGuests.infants - 1 : 0,
    }))
  }

  const onSelectSeats = event => {
    event.preventDefault()
    onSeatsBooking(guests)
  }

  return (
    <div className="age-container" data-tesid="guests">
      <div className="age-booking-container">
        <div className="age-details-heading">
          <p className="age-type-heading">Adults</p>
          <p className="age-heading">Age 13 or above</p>
        </div>
        <div className="no-of-booking-seats-containter">
          <button
            type="button"
            className="hide-btn inc-dec-icons"
            onClick={onSelectAdultsDec}
          >
            -
          </button>
          <p className="no-of-seats">{guests.adults}</p>
          <button
            type="button"
            className="hide-btn inc-dec-icons"
            onClick={onSelectAdultsInc}
          >
            +
          </button>
        </div>
      </div>
      <hr />
      <div className="age-booking-container">
        <div className="age-details-heading">
          <p className="age-type-heading">Children</p>
          <p className="age-heading">Age 2-12</p>
        </div>
        <div className="no-of-booking-seats-containter">
          <button
            type="button"
            className="hide-btn inc-dec-icons"
            onClick={onSelectChildrensDec}
          >
            -
          </button>
          <p className="no-of-seats">{guests.children}</p>
          <button
            type="button"
            className="hide-btn inc-dec-icons"
            onClick={onSelectChildrensInc}
          >
            +
          </button>
        </div>
      </div>
      <hr />
      <div className="age-booking-container">
        <div className="age-details-heading">
          <p className="age-type-heading">Infants</p>
          <p className="age-heading">under 2</p>
        </div>
        <div className="no-of-booking-seats-containter">
          <button
            type="button"
            className="hide-btn inc-dec-icons"
            onClick={onSelectInfantsDec}
          >
            -
          </button>
          <p className="no-of-seats">{guests.infants}</p>
          <button
            type="button"
            className="hide-btn inc-dec-icons"
            onClick={onSelectInfantsInc}
          >
            +
          </button>
        </div>
      </div>
      <div className="next-pre-btn-container">
        <button
          type="button"
          className="previous-btn"
          onClick={onPreviousDateSelectionForm}
        >
          Previous
        </button>
        <button type="button" onClick={onSelectSeats} className="next-btn">
          Next
        </button>
      </div>
    </div>
  )
}

export default Guests
