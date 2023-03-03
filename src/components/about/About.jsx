import React from 'react'
import './about.css'
import dp6 from '../../assets/dp6.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const about = () => {
  return (
    <section id = 'about' className='about'>
       <h5>Get to Know</h5>
       <h2>About me</h2>
       <div className='about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={dp6} alt='About Image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card'>
              <FaAward className='about__icon'/>
              <h5>B.Tech</h5>
              <small>Sophomore <br/>IIIT Kancheepuram </small>
            </article>

            <article className='about_card'>
              <FiUsers className='about__icon'/>
              <h5>Highlights</h5>
              <small>Explore...Experiment...Evolve </small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed </small>
            </article>
          </div>

          <p>Hello! Myself Srikanthan pursuing my B.Tech at IIIT Kancheepuram, Chennai which is one of the premium colleges of the country.
             <br/><br/>I am a motivated and an enthusiastic guy who loves to talk about startups and problem solving stuffs. I love to talking with new people and share some great ideas, do ping me up if you're interested too :) </p>
          <a href='#contact' className='btn btn-primary1'>Let's Talk</a>
        </div>

       </div>
    </section>
  )
}

export default about