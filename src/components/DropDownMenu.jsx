import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { ArrowRight } from 'react-bootstrap-icons'

import useCustomizer from '../hook/useCustomizer';

const DropDownMenu = ({ closeMethod, services, loading }) => {

  function decodeHTMLEntities(text) {
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.documentElement.textContent;
  }

  const {
    applyStyles,
  } = useCustomizer();

  useEffect(() => {
    applyStyles();
  }, [applyStyles])

  return (
    <aside className='dropdown-container border-bottom'>
        <ul>
        {!loading && services.map((service, index) => {
            return (
            <li key={`${service}-${index}`} onClick={closeMethod}>
                <Link to={`/services/${service.id}`}><p>
                <ArrowRight /> 
                <span>{decodeHTMLEntities(service.title.rendered)}</span>
                </p></Link>
            </li>
            )
        })}
        </ul>
    </aside>
  )
}

export default DropDownMenu
