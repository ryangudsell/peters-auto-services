import './css/App.css'
import { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'

import useCustomizer from './hook/useCustomizer'

import Links from './Links'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  const {
    applyStyles,
  } = useCustomizer();

  useEffect(() => {
    applyStyles();
  }, [applyStyles])

  return (
    <HashRouter>
      <Header />
      <Links />
      <Footer />
    </HashRouter>
  )
}

export default App
