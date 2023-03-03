import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineContacts} from 'react-icons/ai'
import {AiFillProject} from 'react-icons/ai'
import {GoBook} from 'react-icons/go'

import {FaUser} from 'react-icons/fa'
import { useState } from 'react'



const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><FaUser/></a>
        <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><GoBook/></a>
        <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}><AiFillProject/></a>
        <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><AiOutlineContacts/></a>
        

      
    </nav>
  )
}

export default Nav
