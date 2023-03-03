import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/srikanthan-prakash-a94a81224/'><BsLinkedin/></a>
        <a href='https://github.com/techwithsrikanth'><BsGithub/></a>
        

      
    </div>
  )
}

export default HeaderSocials
