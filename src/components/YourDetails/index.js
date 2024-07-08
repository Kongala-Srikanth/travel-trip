import {useState} from 'react'
import './index.css'

const YourDetails = props => {
  const {onUserDetils, prevData} = props
  let inputName = ''
  let inputStartLocation = ''
  let inputEndLocation = ''
  if (prevData !== undefined) {
    inputName = prevData.name
    inputStartLocation = prevData.startLocation
    inputEndLocation = prevData.endLocation
  }

  const [errorMsg, setErrorMsg] = useState({
    name: '',
    startLocation: '',
    endLocation: '',
  })

  const [details, setDetails] = useState({
    name: inputName !== '' ? inputName : '',
    startLocation: inputStartLocation !== '' ? inputStartLocation : '',
    endLocation: inputEndLocation !== '' ? inputEndLocation : '',
  })

  const onEnterName = event => {
    if (event.target.value === '') {
      setErrorMsg(prevErrors => ({...prevErrors, name: 'Enter your name'}))
    } else {
      setErrorMsg(prevErrors => ({...prevErrors, name: ''}))
    }
    setDetails(prevDetails => ({...prevDetails, name: event.target.value}))
  }

  const onEnterStartLoaction = event => {
    if (event.target.value === '') {
      setErrorMsg(prevErrors => ({
        ...prevErrors,
        startLocation: 'Enter your start location',
      }))
    } else {
      setErrorMsg(prevErrors => ({...prevErrors, startLocation: ''}))
    }
    setDetails(prevDetails => ({
      ...prevDetails,
      startLocation: event.target.value,
    }))
  }

  const onEnterEndLoaction = event => {
    if (event.target.value === '') {
      setErrorMsg(prevErrors => ({
        ...prevErrors,
        endLocation: 'Enter your end location',
      }))
    } else {
      setErrorMsg(prevErrors => ({...prevErrors, endLocation: ''}))
    }
    setDetails(prevDetails => ({
      ...prevDetails,
      endLocation: event.target.value,
    }))
  }

  const onSubmitUserDetails = event => {
    event.preventDefault()

    if (
      details.name !== '' &&
      details.startLocation !== '' &&
      details.endLocation !== ''
    ) {
      onUserDetils(details)
    }

    const inputUserName =
      details.name === '' &&
      setErrorMsg(prevErrors => ({...prevErrors, name: 'Enter your name'}))

    const inputStartLoaction =
      details.startLocation === '' &&
      setErrorMsg(prevErrors => ({
        ...prevErrors,
        startLocation: 'Enter your start location',
      }))

    const inputEndLoaction =
      details.endLocation === '' &&
      setErrorMsg(prevErrors => ({
        ...prevErrors,
        endLocation: 'Enter your end location',
      }))
  }

  return (
    <div className="booking-form" data-tesid="your details">
      <label className="label-name" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="text"
        className="input-box"
        placeholder="Enter name"
        onBlur={onEnterName}
        onChange={onEnterName}
        value={details.name}
      />
      {errorMsg.name && <p className="booking-error-msg">{errorMsg.name}</p>}

      <label className="label-name" htmlFor="startLocation">
        Start Location
      </label>
      <input
        id="startLocation"
        type="text"
        className="input-box"
        placeholder="Enter start location"
        onBlur={onEnterStartLoaction}
        onChange={onEnterStartLoaction}
        value={details.startLocation}
      />
      {errorMsg.startLocation && (
        <p className="booking-error-msg">{errorMsg.startLocation}</p>
      )}
      <label className="label-name" htmlFor="endLocation">
        End Location
      </label>
      <input
        id="endLocation"
        type="text"
        className="input-box"
        placeholder="Enter end location"
        onBlur={onEnterEndLoaction}
        onChange={onEnterEndLoaction}
        value={details.endLocation}
      />
      {errorMsg.endLocation && (
        <p className="booking-error-msg">{errorMsg.endLocation}</p>
      )}
      <button type="button" className="next-btn" onClick={onSubmitUserDetails}>
        Next
      </button>
    </div>
  )
}

export default YourDetails
