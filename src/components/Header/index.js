import {Link, Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GoHome} from 'react-icons/go'
import {MdOutlineLuggage} from 'react-icons/md'
import {TbLogout2} from 'react-icons/tb'
import './index.css'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.push('/login')
  }

  return (
    <>
      <nav className="sm-nav-container">
        <ul className="sm-nav-icons-container">
          <li className="sm-icon-container">
            <Link to="/" className="link">
              <GoHome className="sm-nav-icons" />
              <p className="sm-nav-icon-name">Home</p>
            </Link>
          </li>

          <li className="sm-icon-container">
            <Link to="/my-trips" className="link">
              <MdOutlineLuggage className="sm-nav-icons" />
              <p className="sm-nav-icon-name">My Trips</p>
            </Link>
          </li>
          <li className="sm-icon-container">
            <button type="button" className="hide-btn" onClick={onLogout}>
              <TbLogout2 className="sm-nav-icons" />
              <p className="sm-nav-icon-name">Logout</p>
            </button>
          </li>
        </ul>
      </nav>
      <nav className="lg-nav-container">
        <Link to="/" className="link">
          <h1 className="lg-nav-logo">Travel Trip</h1>
        </Link>

        <div className="lg-sub-nav-container">
          <Link to="/" className="link">
            <p className="lg-nav-home-option">Home</p>
          </Link>
          <Link to="/my-trips" className="link">
            <p className="lg-nav-my-trips-option">My Trips</p>
          </Link>
        </div>
        <button
          type="button"
          className="lg-nav-logout-option"
          onClick={onLogout}
        >
          Logout
        </button>
      </nav>
    </>
  )
}

export default withRouter(Header)
