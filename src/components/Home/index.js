import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-main-container">
      <div className="home-details-container">
        <h1 className="home-main-heading">Travel. Relax. Memories.</h1>
        <p className="home-title-description">
          With travel trip you can experience new travel and the best tourist
          destinations.
        </p>
        <Link to="/book-a-new-trip" className="link">
          <button type="button" className="home-booking-trip-btn">
            Book a new trip
          </button>
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dxgjs0mtb/image/upload/v1719118872/image_5_3x_jinfaf.png"
        alt="trip img"
        className="home-trip-img"
      />
    </div>
  </>
)

export default Home
