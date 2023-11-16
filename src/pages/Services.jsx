import { Link } from "react-router-dom"

const Services = () => {
  return (
    <main>
      <section className="sitemap landing">
        <div className='image-div'></div>
        <div className='text-div border-bottom'>
          <h1>Services</h1>
        </div>
      </section>
      <section className="sitemap sitemap-list">
        <h2>Services Sitemap</h2>
        <p>Here is a list of servcies we provide.</p>
        <ul>
          <li><Link to={`/services/:id`}><h3>Service</h3></Link></li>
          <li><Link to={`/services/:id`}><h3>Service</h3></Link></li>
          <li><Link to={`/services/:id`}><h3>Service</h3></Link></li>
          <li><Link to={`/services/:id`}><h3>Service</h3></Link></li>
          <li><Link to={`/services/:id`}><h3>Service</h3></Link></li>
          <li><Link to={`/services/:id`}><h3>Service</h3></Link></li>
          <li><Link to={`/services/:id`}><h3>Service</h3></Link></li>
          <li><Link to={`/services/:id`}><h3>Service</h3></Link></li>
          <li><Link to={`/services/:id`}><h3>Service</h3></Link></li>
        </ul>
      </section>
    </main>
  )
}

export default Services
