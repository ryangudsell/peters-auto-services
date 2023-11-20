import { Link } from "react-router-dom"
import { ArrowUp } from "react-bootstrap-icons"

const Footer = () => {
  return (
    <footer>
      <div className="footer-back-button">
      <ArrowUp className="on-click" 
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }} />
      <a className="on-click"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }}><p>Back to top</p></a>
      </div>
      <ul>
        <li><h2>Page Links</h2></li>
        <li><Link to="/" className="on-click"><p>Home</p></Link></li>
        <li><Link to="/about" className="on-click"><p>About</p></Link></li>
        <li><Link to="/services" className="on-click"><p>Sevices Sitemap</p></Link></li>
        <li><Link to="/contact" className="on-click"><p>Contact</p></Link></li>
      </ul>
      <p className="copyright">© 2023 Peter’s Auto Services All Rights Reserved</p>
    </footer>
  )
}

export default Footer
