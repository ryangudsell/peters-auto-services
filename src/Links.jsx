import { Routes, Route } from 'react-router-dom'

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import SingleService from './pages/SingleService'
import Product from './pages/Product'

const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route path="/services/:id" element={<SingleService />} />
        <Route path="/services/:id/booking/:productId" element={<Product />} />
    </Routes>
  )
}

export default Links
