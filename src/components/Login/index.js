import {useState} from 'react'
import Cookies from 'js-cookie'
import {FiEye, FiEyeOff} from 'react-icons/fi'

import './index.css'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const onLogin = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const {history} = props

      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.push('/')
    } else {
      setErrorMsg(data.error_msg)
    }
  }

  const onShowPassword = () =>
    setShowPassword(prevShowPassword => !prevShowPassword)

  return (
    <div className="LoginPageContainer">
      <div className="login-card-container">
        <p className="website-logo">Travel Trip</p>
        <form className="login-form" onSubmit={onLogin}>
          <label className="login-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            className="login-input-box"
            id="username"
            onChange={event => setUsername(event.target.value)}
          />
          <label className="login-label" htmlFor="password">
            Password
          </label>
          <div className="login-input-box password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="password-input-box"
              id="password"
              onChange={event => setPassword(event.target.value)}
            />
            <button
              type="button"
              data-testid="show-password"
              className="hide-btn"
              onClick={onShowPassword}
            >
              {showPassword ? (
                <FiEyeOff className="show-password" />
              ) : (
                <FiEye className="show-password" />
              )}
            </button>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        {errorMsg !== '' && <p className="error-msg">{errorMsg}</p>}
      </div>
    </div>
  )
}

export default Login
