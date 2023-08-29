import './header.scss'
import logo from '../../assets/logo-01.png'
import { useTranslation } from 'react-i18next';

export default function Header() {
    
    const { t, i18n } = useTranslation();
    
    const handleClcikLang = (e) => {
        i18n.changeLanguage(e.target.value);
        
        localStorage.setItem("lang", JSON.stringify(e.target.value));
    };
    
    
    return (
        <header className="header">
        <div className="container">
        <ul className="header_container">
        <a href="/" className="header_heading">
        {t('header.main')}
        </a>
        
        <a href="#about" className="header_heading">
        {t('header.about')}
        </a>
        
        <img src={logo} alt="" className="header_img" />
        
        <a href="#travel" className="header_heading">
        {t('header.travel')}
        </a>
        
        <a href="#contact" className="header_heading">
        {t('header.contact')}
        </a>
        
        <select
        name="language"
        onChange={handleClcikLang}
        className="header_select"
        >
        <option className="header_opt" value="uz">
        Uz
        </option>
        <option className="header_opt" value="ru">
        Ру
        </option>
        <option className="header_opt" value="eng">
        Eng
        </option>
        </select>
        
        
        </ul>
        </div>
        </header>
        )
    }