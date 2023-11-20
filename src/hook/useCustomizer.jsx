import { useState, useEffect } from "react"
import axios from 'axios'
import { applyStyles } from '../utils/styleUtils'

const useCustomizer = () => {
    const [primaryColor, setPrimaryColor] = useState('');
    const [secondaryColor, setSecondaryColor] = useState('');
    const [tertiaryColor, setTertiaryColor] = useState('');
    const [textColor, setTextColor] = useState('');
    const [altTextColor, setAltTextColor] = useState('');
    const [headerFontFamily, setHeaderFontFamily] = useState('');
    const [paragraphFontFamily, setParagraphFontFamily] = useState('');

    const baseUrl = import.meta.env.VITE_WP_BASEURL;
    const endpoint = `${baseUrl}/wp-json/custom-theme/v1/customizer-settings`

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            const {
                primaryColor,
                secondaryColor,
                tertiaryColor,
                textColor,
                altTextColor,
                headerFontFamily,
                paragraphFontFamily
            } = res.data
            setPrimaryColor(primaryColor)
            setSecondaryColor(secondaryColor)
            setTertiaryColor(tertiaryColor)
            setTextColor(textColor)
            setAltTextColor(altTextColor)
            setHeaderFontFamily(headerFontFamily)
            setParagraphFontFamily(paragraphFontFamily)
        })
        .catch((err) => console.error(err))
    }, [baseUrl])
  return {
    primaryColor, secondaryColor, tertiaryColor, 
    textColor, altTextColor,
    headerFontFamily, paragraphFontFamily,
    applyStyles: () => applyStyles({
      primaryColor, 
      secondaryColor, 
      tertiaryColor, 
      textColor, 
      altTextColor,
      headerFontFamily, 
      paragraphFontFamily
    })
  }
}

export default useCustomizer
