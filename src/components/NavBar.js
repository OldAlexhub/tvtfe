import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <nav className="tv-nav">
      <div className="tv-container nav-inner">
        <div className="brand">
          <img src={logo} alt="Trans Voyage Taxi" className="tv-logo" />
          <div>
            <div className="tv-site-title">Trans Voyage Taxi</div>
            <div className="tv-tagline">Transportation You Can Trust!</div>
          </div>
        </div>

        <div className="nav-links">
          <NavLink to="/" end className={({isActive})=> isActive? 'active': ''}>Home</NavLink>
          <NavLink to="/services" className={({isActive})=> isActive? 'active': ''}>Services</NavLink>
          <NavLink to="/booking" className={({isActive})=> isActive? 'active': ''}>Book</NavLink>
          <NavLink to="/compliance" className={({isActive})=> isActive? 'active': ''}>Compliance</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive? 'active': ''}>About</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
