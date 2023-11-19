import { useEffect } from 'react'
import './css/App.css'
import { HashRouter } from 'react-router-dom'

import useCustomizer from './hook/useCustomizer'

import Links from './Links'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // Customizer Settings for Client
  const {
    bodyBgColor,
    bodyTextColor,
    linkTextColor,
    navBgColor,
    navBorderColor,
    navTextColor,
    landingOverlayColor,
    landingOverlayTextColor,
    homeServicesOverlayColor,
    formBgColor,
    formSubheaderColor,
    buttonBgColor,
    buttonBorderColor,
    buttonTextColor,
    footerBgColor,
    footerBorderColor,
    footerTextColor,
    headerFontFamily,
    paragraphFontFamily
  } = useCustomizer()

  useEffect(() => {
    // Colour
    document.body.style.backgroundColor = `${bodyBgColor}`
    document.body.style.color = `${bodyTextColor}`
    document.querySelectorAll('a').forEach(element => {element.style.color = `${linkTextColor}`})

    document.querySelectorAll('nav').forEach(element => element.style.backgroundColor = `${navBgColor}`)
    document.querySelectorAll('.border-bottom').forEach(element => element.style.borderColor = `${navBorderColor}`)
    document.querySelectorAll('nav').forEach(element => {element.style.color = `${navTextColor}`})
    document.querySelectorAll('nav').forEach(nav => nav.querySelectorAll('a').forEach(element => element.style.color =`${navTextColor}`))

    document.querySelectorAll('.dropdown-menu').forEach(element => element.style.backgroundColor = `${navBgColor}`)
    document.querySelectorAll('.dropdown-menu').forEach(element => element.style.color = `${navTextColor}`)
    document.querySelectorAll('.dropdown-menu').forEach(div => div.querySelectorAll('a').forEach(element => element.style.color = `${navTextColor}`))

    document.querySelectorAll('button').forEach(element => element.style.backgroundColor = `${buttonBgColor}`)
    document.querySelectorAll('button').forEach(element => element.style.borderColor = `${buttonBorderColor}`)
    document.querySelectorAll('button').forEach(element => element.style.color = `${buttonTextColor}`)

    Array.from(document.getElementsByClassName('image-div')).forEach(element => {element.style.backgroundImage = `linear-gradient(${landingOverlayColor}, ${landingOverlayColor}), url("./img/landing-img.jpeg")`})
    Array.from(document.getElementsByClassName('image-div')).forEach(element => {element.style.color = `${landingOverlayTextColor}`})

    document.querySelectorAll('footer').forEach(element => element.style.backgroundColor = `${footerBgColor}`)
    document.querySelectorAll('footer').forEach(element => element.style.borderColor = `${footerBorderColor}`)
    document.querySelectorAll('footer').forEach(element => element.style.color = `${footerTextColor}`)
    document.querySelectorAll('footer').forEach(element => element.style.color =`${footerTextColor}`)
    document.querySelectorAll('footer').forEach(footer => footer.querySelectorAll('a').forEach(element => element.style.color =`${footerTextColor}`))

    // Fonts
    if (headerFontFamily === "Montserrat" || headerFontFamily === "Roboto" || headerFontFamily === "Nunito") {
      document.querySelectorAll('h1').forEach(element => {element.style.fontFamily = `'${headerFontFamily}', sans-serif`})
      document.querySelectorAll('h2').forEach(element => {element.style.fontFamily = `'${headerFontFamily}', sans-serif`})
    }
    if (paragraphFontFamily === "Montserrat" || paragraphFontFamily === "Roboto" || paragraphFontFamily === "Nunito") {
      document.querySelectorAll('h3').forEach(element => {element.style.fontFamily = `'${paragraphFontFamily}', sans-serif`})
      document.querySelectorAll('h4').forEach(element => {element.style.fontFamily = `'${paragraphFontFamily}', sans-serif`})
      document.querySelectorAll('p').forEach(element => {element.style.fontFamily = `'${paragraphFontFamily}', sans-serif`})
      document.querySelectorAll('a').forEach(element => {element.style.fontFamily = `'${paragraphFontFamily}', sans-serif`})
      document.querySelectorAll('li').forEach(element => {element.style.fontFamily = `'${paragraphFontFamily}', sans-serif`})
      document.querySelectorAll('textarea').forEach(element => {element.style.fontFamily = `'${paragraphFontFamily}', sans-serif`})
      document.querySelectorAll('input').forEach(element => {element.style.fontFamily = `'${paragraphFontFamily}', sans-serif`})
    }
  }, [
    bodyBgColor, bodyTextColor, linkTextColor, navBgColor, navBorderColor, navTextColor, landingOverlayColor, landingOverlayTextColor, homeServicesOverlayColor, formBgColor, formSubheaderColor, buttonBgColor, buttonBorderColor, buttonTextColor, footerBgColor, footerBorderColor, footerTextColor, headerFontFamily, paragraphFontFamily
  ])

  return (
    <HashRouter>
      <Header />
      <Links />
      <Footer />
    </HashRouter>
  )
}

export default App
