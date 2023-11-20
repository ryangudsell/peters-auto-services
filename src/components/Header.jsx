import { useState, useEffect } from 'react'
import { List, ChevronUp, ChevronDown } from 'react-bootstrap-icons'
import MobileMenu from './MobileMenu'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DropDownMenu from './DropDownMenu'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Header = () => {
  const navigate = useNavigate()

  const endpoint = `${baseUrl}/services`
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
    setServices(res.data.reverse())
    setLoading(false)
    console.log(res.data);
    })
    .catch((err) => console.log(err))
  }, [])

  const [menuIsOpen, openMenu] = useState(false)
  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    document.body.classList.toggle("no-scroll");
  }

  const [dropDownIsOpen, openDropDown] = useState(false)
  const toggleDropDownMenu = () => {
    openDropDown(!dropDownIsOpen);
  }

  return (
    <header id='header'>
      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
      {dropDownIsOpen && (
        <DropDownMenu closeMethod={toggleDropDownMenu} services={services} loading={loading} />
      )}
      <nav className='desktop desktop-nav border-bottom'>
        <img src="./img/logo.png" alt="Logo for Peter's Auto Services" 
          onClick={() => {navigate("/")}} className='on-click' />
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
      <nav className='mobile mobile-nav border-bottom'>
        <img src="./img/logo.png" alt="Logo for Peter's Auto Services" 
          onClick={() => {navigate("/")}} className='on-click' />
        <List id='mobile-menu-button' className='on-click' 
          onClick={toggleMobileMenu} />
      </nav>
    </header>
  )
}

export default Header
