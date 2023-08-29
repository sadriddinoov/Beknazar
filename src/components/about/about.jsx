import './about.scss'
import { useTranslation } from 'react-i18next'

import man2 from '../../assets/man2.png'
import bgcimg from '../../assets/Rectangle2.png'

export default function About() {
    const {t}  = useTranslation()

    const myStyle = {
        backgroundImage:
        `url(${bgcimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '320px',
      }

    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="about_container">
                    <div className='about_bgc' style={myStyle}>
                        <h1 className="about_heading">
                            {t('about.title')}
                        </h1>
                    </div>

                    <div className="about_wrap">
                        <div className='about_imgg'>
                        <img src={man2} alt="" className="about_img" />
                        </div>
                        <div className="about_modal"></div>

                        <div className="about_right">
                            <h2 className="about_right-heading">
                                {t('about.subtitle')}
                            </h2>

                            <p className="about_text">
                            {t('about.text')} 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}