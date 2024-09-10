import React from 'react'
import "./Footer.css"

export default function Footer(props) {
  return (
    <footer ref={props.x} className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Abdualrhman</h1>

        <ul className='footer__list'>
          <li>
            <a href="#about-me" className='footer__link'>About</a>
          </li>

          <li>
            <a href="#skills" className='footer__link'>Skills</a>
          </li>


          <li>
            <a href="#contact" className='footer__link'>Contact</a>
          </li>


        </ul>

        <div className='footer__social'>
            <a href="https://www.github.com/" target='_blank' className='footer__social-link'><i className="fa-brands fa-github"></i></a>
            <a href="https://twitter.com/?lang=en" target='_blank' className='footer__social-link' ><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/abdualrhman-alabdali-11099b226/" target='_blank' className='footer__social-link'><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  )
}
