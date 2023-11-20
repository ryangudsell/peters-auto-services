
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

    document.querySelectorAll('.dropdown-container')?.forEach(element => element.style.backgroundColor = `${primaryColor}`)
    document.querySelectorAll('.dropdown-menu')?.forEach(element => element.style.backgroundColor = `${primaryColor}`)
    document.querySelectorAll('.dropdown-menu')?.forEach(element => element.style.borderColor = `${tertiaryColor}`)
    document.querySelectorAll('.dropdown-menu')?.forEach(element => element.style.color = `${textColor}`)
    document.querySelectorAll('.dropdown-menu')?.forEach(div => div.querySelectorAll('a').forEach(element => element.style.color = `${textColor}`))

    document.querySelectorAll('button').forEach(element => element.style.backgroundColor = `${secondaryColor}`)
    document.querySelectorAll('button').forEach(element => element.style.borderColor = `${primaryColor}`)
    document.querySelectorAll('button').forEach(element => element.style.color = `${altTextColor}`)
    document.querySelectorAll('button').forEach(button => button.querySelectorAll('a').forEach(element => element.style.color = `${altTextColor}`))


    document.querySelectorAll('.image-div')?.forEach(element => {element.style.backgroundImage = `linear-gradient(${tertiaryColor}CC, ${tertiaryColor}CC), url("./img/landing-img.jpeg")`})
    document.querySelectorAll('.image-div')?.forEach(element => {element.style.color = `${altTextColor}`})

    document.querySelectorAll('footer')?.forEach(element => element.style.backgroundColor = `${secondaryColor}`)
    document.querySelectorAll('footer')?.forEach(element => element.style.borderColor = `${primaryColor}`)
    document.querySelectorAll('footer')?.forEach(element => element.style.color = `${altTextColor}`)
    document.querySelectorAll('footer')?.forEach(footer => footer.querySelectorAll('a').forEach(element => element.style.color =`${altTextColor}`))

    document.querySelectorAll('svg')?.forEach(element => element.style.color = `${secondaryColor}`)

    document.querySelector('footer').querySelectorAll('svg').forEach(element => element.style.color = `${primaryColor}`)

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
}

export default applyStyles
