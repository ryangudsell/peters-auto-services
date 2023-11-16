import { Routes, Route } from 'react-router-dom'

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import SingleService from './pages/SingleService'

const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<SingleService />} />
    </Routes>
  )
}

export default Links
