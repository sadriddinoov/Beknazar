import './App.scss';
import Header from './components/header/header';
import { useTranslation } from 'react-i18next';

import beach from '../src/assets/rectangle1.png'
import hero from '../src/assets/man5.png'
import bgcbeach from '../src/assets/bgc.png'
import man from '../src/assets/man1.png'
import About from './components/about/about';
import Footer from './components/footer/footer';
import Travel from './components/travel/travel';
import Contact from './components/contact/contact';

function App() {
  const {t} = useTranslation()
  
  const myStyle = {
    backgroundImage:
    `url(${bgcbeach})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '320px'
  }
  return (
    <div className="App">
    <Header/>
    
    <section className="hero">
    <div className="container">
    <div className="hero_container">
    <div>
    <div className="hero_modal"></div>
    <img src={beach} alt="" className="hero_beach" />
    <img src={hero} alt="" className="hero_img" />
    </div>
    
    <div className="hero_wrap">
    <h1 className="hero_heading">
    {t('hero.title')}
    </h1>
    
    <div className="hero_wrapper">
    <a href="https://t.me/bekzod1970" target='_blank' className="hero_btn">
    {t('hero.go')}
    </a>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="moment">
    <div className="container">
    <div className="moment_container">
    <div style={myStyle} className="moment_bgc">
    <h2 className="moment_heading">
    {t('moment.title')}
    </h2>
    
    <div className="hero_wrapper">
    <a href="https://t.me/bekzod1970" target='_blank' className="hero_btn">
    {t('hero.go')}
    </a>
    </div>
    </div>
    
    <div className="moment_wrap">
    <div className="hero_modal"></div>
    <div className="moment_left">
    <h3 className="moment_left-heading">
    {t('moment.text')}
    </h3>
    
    <p className="moment_text">
      {t('moment.text2')}
    </p>
    </div>
    
    <img className='moment_img' src={man} alt="" />
    </div>
    </div>
    </div>
    </section>

    <About/>
    <Travel/>
    <Contact/>
    <Footer/>
    </div>
    );
  }
  
  export default App;
  