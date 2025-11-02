import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="tv-header">
      <div className="tv-container">
        <div className="tv-brand">
          <img src={logo} alt="Trans Voyage Taxi" className="tv-logo" />
          <div>
            <h1>Trans Voyage Taxi</h1>
            <p className="tv-tagline">Transportation You Can Trust!</p>
          </div>
        </div>
        <div className="tv-cta">
          <button className="tv-book">Book A Ride</button>
        </div>
      </div>
    </header>
  )
}

export default Header
