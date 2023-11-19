import { useState, useEffect } from "react"
import axios from 'axios'

const useCustomizer = () => {
    const [bodyBgColor, setBodyBgColor] = useState('');
    const [bodyTextColor, setBodyTextColor] = useState('');
    const [linkTextColor, setLinkTextColor] = useState('');
    const [navBgColor, setNavBgColor] = useState('');
    const [navBorderColor, setNavBorderColor] = useState('');
    const [navTextColor, setNavTextColor] = useState('');
    const [landingOverlayColor, setLandingOverlayColor] = useState('');
    const [landingOverlayTextColor, setLandingOverlayTextColor] = useState('');
    const [homeServicesOverlayColor, setHomeServicesOverlayColor] = useState('');
    const [formBgColor, setFormBgColor] = useState('');
    const [formSubheaderColor, setFormSubheaderColor] = useState('');
    const [buttonBgColor, setButtonBgColor] = useState('');
    const [buttonBorderColor, setButtonBorderColor] = useState('');
    const [buttonTextColor, setButtonTextColor] = useState('');
    const [footerBgColor, setFooterBgColor] = useState('');
    const [footerBorderColor, setFooterBorderColor] = useState('');
    const [footerTextColor, setFooterTextColor] = useState('');
    const [headerFontFamily, setHeaderFontFamily] = useState('');
    const [paragraphFontFamily, setParagraphFontFamily] = useState('');

    const baseUrl = import.meta.env.VITE_WP_BASEURL;
    const endpoint = `${baseUrl}/wp-json/custom-theme/v1/customizer-settings`

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
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
            } = res.data
            setBodyBgColor(bodyBgColor)
            setBodyTextColor(bodyTextColor)
            setLinkTextColor(linkTextColor)
            setNavBgColor(navBgColor)
            setNavBorderColor(navBorderColor)
            setNavTextColor(navTextColor)
            setLandingOverlayColor(landingOverlayColor)
            setLandingOverlayTextColor(landingOverlayTextColor)
            setHomeServicesOverlayColor(homeServicesOverlayColor)
            setFormBgColor(formBgColor)
            setFormSubheaderColor(formSubheaderColor)
            setButtonBgColor(buttonBgColor)
            setButtonBorderColor(buttonBorderColor)
            setButtonTextColor(buttonTextColor)
            setFooterBgColor(footerBgColor)
            setFooterBorderColor(footerBorderColor)
            setFooterTextColor(footerTextColor)
            setHeaderFontFamily(headerFontFamily)
            setParagraphFontFamily(paragraphFontFamily)
        })
        .catch((err) => console.error(err))
    }, [baseUrl])
  return {
    bodyBgColor, bodyTextColor, linkTextColor, navBgColor, navBorderColor, navTextColor, landingOverlayColor, landingOverlayTextColor, homeServicesOverlayColor, formBgColor, formSubheaderColor, buttonBgColor, buttonBorderColor, buttonTextColor, footerBgColor, footerBorderColor, footerTextColor, headerFontFamily, paragraphFontFamily
  }
}

export default useCustomizer
