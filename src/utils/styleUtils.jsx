
export const applyStyles = (customizerSettings) => {
    // Customizer Settings for Client
    const {
        primaryColor, 
        secondaryColor, 
        tertiaryColor, 
        textColor, 
        altTextColor,
        headerFontFamily, 
        paragraphFontFamily
    } = customizerSettings;

    // Colour
    document.body.style.backgroundColor = `${primaryColor}`
    document.body.style.color = `${textColor}`
    document.querySelectorAll('a').forEach(element => {element.style.color = `${textColor}`})

    document.querySelector('.mobile-nav').style.backgroundColor = `${primaryColor}`
    document.querySelector('.desktop-nav').style.backgroundColor = `${primaryColor}`
    document.querySelectorAll('.border-bottom').forEach(element => element.style.borderColor = `${tertiaryColor}`)
    
    document.querySelectorAll('nav').forEach(element => {element.style.color = `${textColor}`})
    document.querySelectorAll('nav').forEach(nav => nav.querySelectorAll('a').forEach(element => element.style.color =`${textColor}`))

    document.getElementById("mobile-menu")?.querySelectorAll('a').forEach(element => element.style.color = `${altTextColor}`)

    document.querySelectorAll('.dropdown-container')?.forEach(element => {element.style.backgroundColor = `${primaryColor}`})
    document.querySelectorAll('.dropdown-menu')?.forEach(element => {
      element.style.backgroundColor = `${primaryColor}`
      element.style.borderColor = `${tertiaryColor}`
      element.style.color = `${textColor}`
    })
    document.querySelectorAll('.dropdown-menu')?.forEach(div => div.querySelectorAll('a').forEach(element => element.style.color = `${textColor}`))

    document.querySelectorAll('button').forEach(element => {
      element.style.backgroundColor = `${secondaryColor}`
      element.style.borderColor = `${primaryColor}`
      element.style.color = `${altTextColor}`
    })
    
    document.querySelectorAll('button').forEach(button => button.querySelectorAll('a').forEach(element => element.style.color = `${altTextColor}`))


    document.querySelectorAll('.image-div')?.forEach(element => {
      element.style.color = `${altTextColor}`
      element.style.backgroundImage = `linear-gradient(${tertiaryColor}CC, ${tertiaryColor}CC), url("./img/landing-img.jpeg")`
    })

    document.querySelectorAll('footer')?.forEach(element => {
      element.style.backgroundColor = `${secondaryColor}`
      element.style.borderColor = `${primaryColor}`
      element.style.color = `${altTextColor}`
    })
    document.querySelectorAll('footer')?.forEach(footer => footer.querySelectorAll('a').forEach(element => element.style.color =`${altTextColor}`))

    document.querySelectorAll('svg')?.forEach(element => element.style.color = `${secondaryColor}`)

    document.querySelector('footer').querySelectorAll('svg').forEach(element => element.style.color = `${primaryColor}`)

    // Fonts
    if (headerFontFamily === "Montserrat" || headerFontFamily === "Roboto" || headerFontFamily === "Nunito") {
      document.querySelectorAll('h1, h2').forEach(element => {element.style.fontFamily = `'${headerFontFamily}', sans-serif`})
      // document.querySelectorAll('h2').forEach(element => {element.style.fontFamily = `'${headerFontFamily}', sans-serif`})
    }
    if (paragraphFontFamily === "Montserrat" || paragraphFontFamily === "Roboto" || paragraphFontFamily === "Nunito") {
      document.querySelectorAll('h3, h4, p, a, li, textarea, input').forEach(element => {element.style.fontFamily = `'${paragraphFontFamily}', sans-serif`})
    }
}

export default applyStyles
