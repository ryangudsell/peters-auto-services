import React, { useState } from 'react'
import { List, ChevronUp, ChevronDown, ArrowRight } from 'react-bootstrap-icons'
import MobileMenu from './MobileMenu'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

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
        <aside className='dropdown-container border-bottom'>
          <ul>
            <li><Link to="/services/:id"><p><ArrowRight /> Service</p></Link></li>
            <li><Link to="/services/:id"><p><ArrowRight /> Service</p></Link></li>
            <li><Link to="/services/:id"><p><ArrowRight /> Service</p></Link></li>
            <li><Link to="/services/:id"><p><ArrowRight /> Service</p></Link></li>
            <li><Link to="/services/:id"><p><ArrowRight /> Service</p></Link></li>
            <li><Link to="/services/:id"><p><ArrowRight /> Service</p></Link></li>
            <li><Link to="/services/:id"><p><ArrowRight /> Service</p></Link></li>
            <li><Link to="/services/:id"><p><ArrowRight /> Service</p></Link></li>
            <li><Link to="/services/:id"><p><ArrowRight /> Service</p></Link></li>
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
