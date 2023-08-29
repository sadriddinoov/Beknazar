import './footer.scss'
import logo from '../../assets/logo-01.png'
import group from '../../assets/Group .png'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const {t} = useTranslation()
    
    return (
        <footer className="footer">
        <div className="container">
        <div className="footer_container">
        <img src={logo} alt="" className="footer_img" />
        
        <a href="/" className="footer_heading">
        {t('header.main')}
        </a>
        <a href="#about" className="footer_heading">
        {t('header.about')}
        </a>
        
    
        <a href="#travel" className="footer_heading">
        {t('header.travel')}
        </a>
        <a href="#contact" className="footer_heading">
        {t('header.contact')}
        </a>
        <img src={group} alt="" className="footer_group" />
        </div>
        </div>
        </footer>
        )
    }