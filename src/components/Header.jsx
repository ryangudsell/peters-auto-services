import React, { useEffect, useState } from 'react'
import { List, ChevronUp, ChevronDown, ArrowRight } from 'react-bootstrap-icons'
import MobileMenu from './MobileMenu'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Header = () => {
  const navigate = useNavigate()

  const endpoint = `${baseUrl}/services`
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  const [menuIsOpen, openMenu] = useState(false)
  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    document.body.classList.toggle("no-scroll");
  }

  const [dropDownIsOpen, openDropDown] = useState(false)
  const toggleDropDownMenu = () => {
    openDropDown(!dropDownIsOpen);
  }

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
      setServices(res.data)
      setLoading(false)
      console.log(res.data);
    })
    .catch((err) => console.log(err))
  }, [])

  function decodeHTMLEntities(text) {
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.documentElement.textContent;
  }

  return (
    <header id='header'>
      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
      {dropDownIsOpen && (
        <aside className='dropdown-container border-bottom'>
          <ul>
            {!loading && services.map((service, index) => {
              return (
                <li key={`${service}-${index}`}>
                  <Link to={`/services/${service.id}`}><p>
                    <ArrowRight /> 
                    <span>{decodeHTMLEntities(service.title.rendered)}</span>
                  </p></Link>
                </li>
              )
            })
            }
          </ul>
        </aside>
      )}
      <nav className='desktop border-bottom'>
        <img src="./img/logo.png" alt="Logo for Peter's Auto Services" 
          onClick={() => {navigate("/")}}/>
        <ul>
          <li><Link to="/" className='on-click'><p>Home</p></Link></li>
          <li><Link to="/about" className='on-click'><p>About</p></Link></li>
          <li><p className='on-click'
            onClick={toggleDropDownMenu}>Services 
            {!dropDownIsOpen ? <ChevronUp /> : <ChevronDown />}
          </p></li>
          <li><Link to="/contact"><p>Contact</p></Link></li>

        </ul>
      </nav>
      <nav className='mobile border-bottom'>
        <img src="./img/logo.png" alt="Logo for Peter's Auto Services" 
          onClick={() => {navigate("/")}}/>
        <List id='mobile-menu-button' className='on-click' 
          onClick={toggleMobileMenu} />
      </nav>
    </header>
  )
}

export default Header
