import { useTranslation } from 'react-i18next'
import './travel.scss'

import bgcimg from '../../assets/Rectangle4.png'
import right from '../../assets/right.png'
import left from '../../assets/left.png'
import { useState } from 'react'

export default function Travel() {
    const {t} = useTranslation()

    const myStyle = {
        backgroundImage:
        `url(${bgcimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '320px',
      }

      const [menu, setMenu] = useState(1);

      const leftclick = () => {
        if (menu > 1) {
            setMenu(menu - 1)
        } else {
            setMenu(12)
        }
      }
      
      const rightclick = () => {
        if (menu < 12) {
            setMenu(menu + 1)
        } else {
            setMenu(1)
        }
      }

      const img1 = [
        {image: "travel1.png"}
      ]

      const img2 = [
        {image: "travel2.png"}
      ]

      const img3 = [
        {image: "travel3.png"}
      ]

      const img4 = [
        {image: "travel4.png"}
      ]

      const img5 = [
        {image: "travel5.png"}
      ]

      const img6 = [
        {image: "travel6.png"}
      ]

      const img7 = [
        {image: "travel7.png"}
      ]

      const img8 = [
        {image: "travel8.png"}
      ]

      const img9 = [
        {image: "travel9.png"}
      ]

      const img10 = [
        {image: "travel10.png"}
      ]

      const img11 = [
        {image: "travel11.png"}
      ]

      const img12 = [
        {image: "travel12.png"}
      ]

      const imgData = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
      ]


    return (
        <section id='travel' className="travel">
            <div className="container">
                <div className="travel_container">
                    <div style={myStyle} className="travel_bg">
                        <h1 className="travel_heading">
                            {t('travel.title')}
                        </h1>
                    </div>

                    <div className="travel_bottom">
                        {
                            imgData[menu - 1].map((item, index) => (
                              <div className='travel_imgg'>
                                  <img className='imgg' key={index} src={require(`../../assets/${item.image}`)} alt="" />
                              </div>
                            ))
                        }
                        <div className="travel_wrap">
                            <img onClick={leftclick} src={left} alt="" className="travel_img" />
                            <img onClick={rightclick} src={right} alt="" className="travel_img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}