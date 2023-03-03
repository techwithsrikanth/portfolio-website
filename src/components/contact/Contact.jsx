import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dx2erw4', 'template_j0z93k8', form.current, '-By-1dcxiN6cHEFtF')

    e.target.reset()
  };
  return (
    <section id='contact' className='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>srikanthprakash072003@gmail.com</h5>
                <a href='mailto: srikanthprakash072003@gmail.com'>Send a Message</a>
            </article>
            <article className='contact__option'>
              <FaLinkedinIn className='contact__option-icon'/>
                <h4>LinkedIn</h4>
                <h5>Srikanthan Prakash</h5>
                <a href='https://www.linkedin.com/in/srikanthan-prakash-a94a81224/'>Connect with me</a>
            </article>
            <article className='contact__option'>
              <AiOutlinePhone className='contact__option-icon'/>
                <h4>Phone Number</h4>
                <h5>6374900245</h5>
                <a href='https://api.whatsapp.com/send?phone=+916374900245'>Whatsapp me for <br/> Colabs and Internships</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact
