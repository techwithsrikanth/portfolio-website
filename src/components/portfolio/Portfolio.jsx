import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img5.png'
import IMG7 from '../../assets/img7.png'
const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>Push Up Counter </h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/techwithsrikanth/push_up_counter-mediapipe-' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/techwithsrikanth/push_up_counter-mediapipe-' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=''/>
          </div>
          <h3>Fake News Prediction</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/techwithsrikanth/fake_news_prednn' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/techwithsrikanth/fake_news_prednn' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt=''/>
          </div>
          <h3>Gold Price Prediction</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/techwithsrikanth/gold_price_predn' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/techwithsrikanth/gold_price_predn' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt=''/>
          </div>
          <h3>Number Plate Recognition</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/techwithsrikanth/number_plate_recognition' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/techwithsrikanth/number_plate_recognition' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt=''/>
          </div>
          <h3>Stock Market using RNN</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/techwithsrikanth/Google-Stock-Price-Prediction-Using-RNN---LSTM' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/techwithsrikanth/Google-Stock-Price-Prediction-Using-RNN---LSTM' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG7} alt=''/>
          </div>
          <h3>Maldives Tour Website</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/techwithsrikanth/Maldives' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/techwithsrikanth/Maldives' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
        </div>
      </section>
  )
}

export default Portfolio
