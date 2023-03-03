import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import DP from '../../assets/DP3.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Hey there! I'm</h5>
        <h1>Srikanthan Prakash</h1>
        <h5 className='text-light'>Software Developer</h5>
        <CTA/>
        <HeaderSocial/>
        
        <div className='me'>
          <img src={DP} className='imgdp' alt=''/>
        </div>

      </div>
    </header>
  )
}

export default Header
