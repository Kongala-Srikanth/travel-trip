import {useState} from 'react'
import './index.css'

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

const TravelAssistacne = props => {
  const {onBookingVechile, onPreviousGuestsForm} = props
  const [isChecked, setIsChecked] = useState(false)
  const [vechile, setVechile] = useState(travelAssistanceList[0].value)

  const onSelectVechile = event => {
    event.preventDefault()

    if (isChecked) {
      onBookingVechile(vechile)
    }
  }

  return (
    <div className="booking-form" data-testid='travel assistance'>
      <div className="check-box-container">
        <input
          type="checkbox"
          className="check-box-input"
          id="travelAssistacne"
          onClick={() => setIsChecked(prevIsChecked => !prevIsChecked)}
        />
        <label className="check-box-label" htmlFor="travelAssistacne">
          Travel Assistance Needed
        </label>
      </div>
      {isChecked && (
        <>
          <label className="label-name" htmlFor="travelAssistanceOptions">
            Travel Assistance
          </label>
          <select
            id="travelAssistanceOptions"
            className="input-box"
            onChange={event => setVechile(event.target.value)}
          >
            {travelAssistanceList.map(each => (
              <option key={each.value} value={each.value}>
                {each.displayText}
              </option>
            ))}
          </select>
        </>
      )}

      <div className="next-pre-btn-container">
        <button
          type="button"
          className="previous-btn"
          onClick={onPreviousGuestsForm}
        >
          Previous
        </button>
        <button type="button" className="next-btn" onClick={onSelectVechile}>
          Next
        </button>
      </div>
    </div>
  )
}

export default TravelAssistacne
