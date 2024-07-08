import {Component} from 'react'
import {v4 as uudiv4} from 'uuid'

import Header from '../Header'
import SideBarOptions from '../SideBarOptions'
import YourDetails from '../YourDetails'
import DateSelection from '../DateSelection'
import Guests from '../Guests'
import TravelAssistacne from '../TravelAssistacne'
import ConfirmationDetails from '../ConfirmationDetails'
import SuccessfulBooking from '../SuccessfulBooking'

import './index.css'

const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

class BookingTrip extends Component {
  state = {
    yourDetails: null,
    dateSelection: null,
    guests: null,
    travelAssistance: null,
    confirmation: null,
    successTicks: [],
    activeOptionId: 'YOUR_DETAILS',
    formHeading: stepsList[0].displayText,
    formDescription: 'Enter your name and location details',
    tempStoreData: [],
  }

  onChangeHeadingDescription = id => {
    let formHeading = ''

    let formDescription = ''

    switch (id) {
      case 'YOUR_DETAILS':
        formHeading = stepsList[0].displayText
        formDescription = 'Enter your name and location details'
        break
      case 'DATE_SELECTION':
        formHeading = stepsList[1].displayText
        formDescription = 'Select your Start and End Date'
        break
      case 'GUESTS':
        formHeading = stepsList[2].displayText
        formDescription = 'Select your guests'
        break
      case 'TRAVEL_ASSISTANCE':
        formHeading = stepsList[3].displayText
        formDescription = 'Select your Travel Assistance'
        break
      case 'CONFIRMATION':
        formHeading = stepsList[4].displayText
        formDescription = 'Confirm your details'
        break
      default:
        formHeading = ''
        formDescription = ''
        break
    }
    this.setState({formHeading, formDescription})
  }

  onUserDetils = details => {
    this.setState(prevState => ({
      yourDetails: details,
      tempStoreData: {...prevState.tempStoreData, yourDetails: details},
      successTicks: [...prevState.successTicks, stepsList[0].stepId],
    }))
    this.onChangeActiveOptionId(stepsList[1].stepId)
  }

  onDateSelection = details => {
    this.setState(prevState => ({
      dateSelection: details,
      tempStoreData: {...prevState.tempStoreData, dateSelection: details},
      successTicks: [...prevState.successTicks, stepsList[1].stepId],
    }))
    this.onChangeActiveOptionId(stepsList[2].stepId)
  }

  onChangeActiveOptionId = id => {
    this.setState({activeOptionId: id}, () =>
      this.onChangeHeadingDescription(id),
    )
  }

  onSeatsBooking = details => {
    this.setState(prevState => ({
      guests: details,
      tempStoreData: {...prevState.tempStoreData, guests: details},
      successTicks: [...prevState.successTicks, stepsList[2].stepId],
    }))
    this.onChangeActiveOptionId(stepsList[3].stepId)
  }

  onBookingVechile = details => {
    this.setState(prevState => ({
      travelAssistance: details,
      tempStoreData: {...prevState.tempStoreData, travelAssistance: details},
      successTicks: [...prevState.successTicks, stepsList[3].stepId],
    }))
    this.onChangeActiveOptionId(stepsList[4].stepId)
  }

  onConfirmDetails = () => {
    const {yourDetails, travelAssistance, dateSelection, guests} = this.state
    const allDetailsConfirm = {
      id: uudiv4(),
      name: yourDetails.name,
      startLocation: yourDetails.startLocation,
      endLocation: yourDetails.endLocation,
      travelAssistance,
      startDate: dateSelection.startDate,
      endDate: dateSelection.endDate,
      guests: guests.adults + guests.children + guests.infants,
    }

    return allDetailsConfirm
  }

  onStoreBookingData = onBookingData => {
    const {confirmation} = this.state

    onBookingData(confirmation)
  }

  onConfirmation = onBookingData => {
    const details = this.onConfirmDetails()
    this.setState(
      prevState => ({
        confirmation: details,
        successTicks: [...prevState.successTicks, stepsList[4].stepId],
      }),
      () => this.onStoreBookingData(onBookingData),
    )
    this.onChangeActiveOptionId('')
  }

  onPreviousYourDetailsForm = () => {
    this.setState(prevState => ({
      yourDetails: null,
      successTicks: prevState.successTicks.filter(
        each => each !== stepsList[0].stepId,
      ),
    }))
    this.onChangeActiveOptionId(stepsList[0].stepId)
  }

  onPreviousDateSelectionForm = () => {
    this.setState(prevState => ({
      dateSelection: null,
      successTicks: prevState.successTicks.filter(
        each => each !== stepsList[1].stepId,
      ),
    }))
    this.onChangeActiveOptionId(stepsList[1].stepId)
  }

  onPreviousGuestsForm = () => {
    this.setState(prevState => ({
      guests: null,
      successTicks: prevState.successTicks.filter(
        each => each !== stepsList[2].stepId,
      ),
    }))
    this.onChangeActiveOptionId(stepsList[2].stepId)
  }

  onBookingNewTrip = () => {
    this.setState(
      {
        yourDetails: null,
        dateSelection: null,
        guests: null,
        travelAssistance: null,
        confirmation: null,
        successTicks: [],
        activeOptionId: 'YOUR_DETAILS',
        tempStoreData: {},
      },
      () => this.onChangeHeadingDescription(stepsList[0].stepId),
    )
  }

  renderForm = () => {
    const {
      yourDetails,
      dateSelection,
      guests,
      travelAssistance,
      confirmation,
      tempStoreData,
    } = this.state

    switch (true) {
      case yourDetails === null:
        return (
          <YourDetails
            onUserDetils={this.onUserDetils}
            prevData={tempStoreData.yourDetails}
          />
        )
      case dateSelection === null:
        return (
          <DateSelection
            onDateSelection={this.onDateSelection}
            onPreviousYourDetailsForm={this.onPreviousYourDetailsForm}
            prevData={tempStoreData.dateSelection}
          />
        )
      case guests === null:
        return (
          <Guests
            onSeatsBooking={this.onSeatsBooking}
            onPreviousDateSelectionForm={this.onPreviousDateSelectionForm}
            prevData={tempStoreData.guests}
          />
        )
      case travelAssistance === null:
        return (
          <TravelAssistacne
            onBookingVechile={this.onBookingVechile}
            onPreviousGuestsForm={this.onPreviousGuestsForm}
            prevData={tempStoreData.travelAssistance}
          />
        )
      case confirmation === null:
        return (
          <ConfirmationDetails
            onConfirmDetails={this.onConfirmDetails}
            onConfirmation={this.onConfirmation}
            onBookingNewTrip={this.onBookingNewTrip}
          />
        )
      default:
        return <SuccessfulBooking onBookingNewTrip={this.onBookingNewTrip} />
    }
  }

  renderFinalOutput = () => {
    const {activeOptionId, successTicks, formDescription, formHeading} =
      this.state
    const tesid = formHeading.toLowerCase()

    return (
      <div className="lg-booking-container">
        <SideBarOptions
          successTicks={successTicks}
          stepsList={stepsList}
          activeOptionId={activeOptionId}
          onChangeActiveOptionId={this.onChangeActiveOptionId}
          className="lg-side-bar-hide"
        />
        <form className="booking-section-bg-container">
          {formHeading !== '' && (
            <h1 className="booking-trip-heading">{formHeading}</h1>
          )}
          {formDescription !== '' && (
            <p className="booking-trip-description">{formDescription}</p>
          )}

          <div className="booking-form-container">{this.renderForm()}</div>
        </form>
      </div>
    )
  }

  /*
  

  // <div className="small-container">{this.renderForm()}</div>
  /*

className={
              window.innerWidth >= 768
                ? 'booking-form-container lg-container'
                : 'small-container'
            }

  renderSmallDevice = () => {
    const {
      activeOptionId,
      successTicks,
      confirmation,
      formDescription,
      formHeading,
    } = this.state
    return (
      <div>
        <div className="sm-side-bar-container">
          <SideBarOptions
            successTicks={successTicks}
            stepsList={stepsList}
            activeOptionId={activeOptionId}
            onChangeActiveOptionId={this.onChangeActiveOptionId}
          />
          <form>
            {formHeading !== '' && (
              <h1 className="sm-booking-trip-heading">{formHeading}</h1>
            )}
            {formDescription !== '' && (
              <p className="sm-booking-trip-description">{formDescription}</p>
            )}
            <div className="small-container">{this.renderForm()}</div>
          </form>
        </div>
      </div>
    )
  }
  */

  render() {
    return (
      <>
        <Header />
        <div className="booking-trip-main-container">
          {this.renderFinalOutput()}
        </div>
      </>
    )
  }
}

export default BookingTrip

// {this.renderSmallDevice()}
