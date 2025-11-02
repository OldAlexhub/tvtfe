import skyline from '../assets/Denver_Skyline.jpg'
import minivan from '../assets/minivan.jpg'
import sedan from '../assets/sedan.jpg'
import wheelchair from '../assets/wheelchair.jpg'

const ServiceCard = ({title, children, img, alt}) => (
  <div className="service-card">
    {img && <img src={img} alt={alt || title} />}
    <div className="service-card-body">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <section className="tv-services">
      <div className="tv-container">
        <h2>Our Services</h2>
        <p className="lead">Reliable, safe, and professional transportation across Denver — airport transfers, city rides, package deliveries, and ADA-compliant trips.</p>

        <div className="services-grid">
          <ServiceCard title="24/7 Airport Transportation" img={minivan} alt="Airport shuttle">
            Round-the-clock taxi service to and from Denver International Airport (DIA). Dependable pickups and drop-offs any hour of the day.
          </ServiceCard>

          <ServiceCard title="City & Metro Rides" img={sedan} alt="City ride">
            Everyday rides throughout Denver and the metro area — commuting, errands, events, and more.
          </ServiceCard>

          <ServiceCard title="Package Delivery Service" img={skyline} alt="Package delivery">
            Courier-style package delivery across Denver and surrounding areas. Fast, secure, and handled with care.
          </ServiceCard>

          <ServiceCard title="Accessible & Special Needs Transport" img={wheelchair} alt="Accessible vehicle">
            ADA-compliant vehicles and trained drivers experienced in non-emergency medical transport (NEMT) for riders with mobility needs.
          </ServiceCard>
        </div>

        <div className="differentiators">
          <h3>Why choose Trans Voyage Taxi?</h3>
          <ul>
            <li><strong>24/7 Availability</strong> — Always open, including dedicated airport transfers.</li>
            <li><strong>Safety & Professionalism</strong> — Highly trained drivers focused on your comfort and safety.</li>
            <li><strong>Modern, Eco-Friendly Fleet</strong> — Late-model, fuel-efficient vehicles for cleaner, more reliable rides.</li>
            <li><strong>Advanced Technology</strong> — Easy online booking and secure payments.</li>
            <li><strong>Accessibility</strong> — Wheelchair-accessible vehicle and NEMT experience.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services
