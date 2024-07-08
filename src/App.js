import {Route, Redirect, Switch} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import MyTrips from './components/MyTrips'
import BookingTrip from './components/BookingTrip'
import ProtectedRoute from './components/ProtectedRoute'
import BookingContext from './context/BookingContext'

import './App.css'

// Note: Use the lists in your code to pass the test cases
/* 
const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]


const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]
*/

// Replace your code here
class App extends Component {
  state = {bookingData: []}

  onBookingData = details => {
    this.setState(prevState => ({
      bookingData: [...prevState.bookingData, details],
    }))
  }

  onCancelTrip = id => {
    this.setState(prevState => ({
      bookingData: prevState.bookingData.filter(each => each.id !== id),
    }))
  }

  render() {
    const {bookingData} = this.state
    return (
      <BookingContext.Provider
        value={{
          bookingData,
          onBookingData: this.onBookingData,
          onCancelTrip: this.onCancelTrip,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/my-trips" component={MyTrips} />
          <ProtectedRoute
            exact
            path="/book-a-new-trip"
            component={BookingTrip}
          />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </BookingContext.Provider>
    )
  }
}

export default App
