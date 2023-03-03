import React from 'react'
import './experience.css'
import TextSphere from './TextSphere'
import TextSphere2 from './TextSphere2'


const Experience = () => {
  return (
    <section id='experience' className='experiences'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__technical'>
          <TextSphere/>

        </div>

        <div className='experience__extra'>
          <TextSphere2/>
        </div>
        
      </div>
    </section>
  )
}

export default Experience
