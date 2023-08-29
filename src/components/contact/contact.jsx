import './contact.scss'
import { useTranslation } from 'react-i18next'

import bgcimg from '../../assets/Rectangle2.png'
import man from '../../assets/man4.png'
import vector from '../../assets/vector .png'
import { useState } from 'react'
import $ from 'jquery'


export default function Contact() {
    const {t} = useTranslation()

    const myStyle = {
        backgroundImage:
        `url(${bgcimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '320px',
      }


  const [user, setuser] = useState('')    
  const [phone, setphone] = useState('')


  let telegram_bot_id = "6181104239:AAEJplkG01kCKuDm_7E2nwp4sCEPvyCBc_o";
  let chat_id = 1442635843; 
  let u_name, u_phone, message;
  let ready = function() {
      u_name = user;
      u_phone = phone;
      message = "Ism: " + u_name + "\nTelefon raqam: " + u_phone;
  };

  let sendtelegram = function(e)  {
    ready();
    
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
    });

    e.preventDefault()
    setphone('')
    setuser('')
};

    return (
        <section id='contact' className="contact">
            <div className="container">
                <div className="contact_container">
                    <div style={myStyle} className="contact_bgc">
                        <h1 className="contact_heading">
                        {t('contact.title')}
                        </h1>
                    </div>

                    <div className="contact_wrap">
                        <div className="contact_left">
                            <h2 className="contact_left-heading">
                                {t('contact.subtitile')}
                            </h2>

                            <p className="contact_text">
                                {t('contact.text')}
                            </p>
                        </div>

                        <div className="contact_imgg">
                        <img className='contact_img' src={man} alt="" />
                        </div>
                        <div className="contact_modal">

                        </div>
                    </div>

                    <div style={{display: 'flex'}}>
                    <form onSubmit={sendtelegram} data-aos="flip-right" className='contact_form'>
                        <div className="contact_form-wrap">
                            <h3 className="contact_form-heading">
                                {t('contact.title')}
                            </h3>
                        </div>

                        <input type="text" className="contact_input" onChange={(e)=>setuser(e.target.value)} value={user} required placeholder={t('contact.name')}/>

                        <input onChange={(e)=>setphone(e.target.value)} value={phone} type="text" className="contact_input" required placeholder={t('contact.number')}/>

                        <button className='contact_btn' type='submit'>{t('contact.send')}</button>

                    </form>

                    <img className='contact_vector' src={vector} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}