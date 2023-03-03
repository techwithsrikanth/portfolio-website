import React from 'react'
import Header from './components/header/Header.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'

import Nav from './components/nav/Nav.jsx'

import Footer from './components/footer/Footer.jsx'
import Experience from './components/experience/Experience.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'


const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <About/>
      
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
