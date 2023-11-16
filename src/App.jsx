import { useEffect } from 'react'
import './css/App.css'
import { HashRouter } from 'react-router-dom'

// Import Links
import Links from './Links'

// Import Components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // Customizer Settings for Client
  useEffect(() => {
    // Colour

    // Fonts

    // Content
    
  }, [])

  return (
    <HashRouter>
      <Header />
      <Links />
      <Footer />
    </HashRouter>
  )
}

export default App
