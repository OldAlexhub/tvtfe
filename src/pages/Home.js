import hero from '../assets/denvervibe.webp'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="tv-container hero-inner">
          <div className="hero-copy">
            <h2>Quality Comes First</h2>
            <p className="lead">24/7 airport transfers, city rides, package delivery, and ADA-compliant transport — all with trained drivers and modern vehicles.</p>
            <a href="/booking" className="tv-book">Book A Ride</a>
          </div>
          <div className="hero-media">
            <img src={hero} alt="Denver skyline" className="hero-image" />
          </div>
        </div>
      </section>

      <Services />
    </div>
  )
}

export default Home
