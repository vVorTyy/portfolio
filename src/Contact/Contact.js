import "./Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(props) {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_sp947em', 'template_svjl2gt', form.current, {
          publicKey: 'lSzjaJTSQ3DECJIWO',
        })
    };
  return (
    <section ref={props.x} className='contact section' id='contact'>
        <h2 className='section__title'>Contact Me</h2>
        <h3 className='section__subtitle'>Get in touch</h3>

        <div className='contact__container container'>
            <div className='contact__content'>     
                <h3 className='contact__title'>Talk to me</h3>  

                <div className='contact__info'>
                    <div className='contact__card'>
                        <i className="fa-regular fa-envelope contact__card-icon"></i>
                        <h3 className='contact__card-title'>Email</h3>
                        <span className='contact__card-data'>alabdali1333@gmail.com</span>
                        <a href="mailto:examplemail@gmail.com" className='contact__button'>Contact with me<i className='bx bx-fa-arrow-right-arrow-left contact__button-icon'></i></a>
                    </div>

                    <div className='contact__card'>
                    <i className="fa-regular fa-envelope contact__card-icon"></i>
                        <h3 className='contact__card-title'>Whatsapp</h3>
                        <span className='contact__card-data'>0533540934</span>
                        <a href="https://api.whatsapp.com/send?phone=0533540934&text=Hello, more information!" className='contact__button'>Contact with me <i className='bx bx-fa-arrow-right-arrow-left contact__button-icon'></i></a>
                    </div>

                    <div className='contact__card'>
                    <i className="fa-regular fa-envelope contact__card-icon"></i>
                        <h3 className='contact__card-title'>telegram</h3>
                        <span className='contact__card-data'>0533540934</span>
                        <a href="" className='contact__button'>Contact with me<i className='bx bx-fa-arrow-right-arrow-left contact__button-icon'></i></a>
                    </div>
                    
                </div>

            </div>

            <div className='contact__content'>     
            <h3 className='contact__title'>Write me your project</h3>            

            <form ref={form} onSubmit={sendEmail} className='contact__form'>
                <div className='contact__form-div'>
                    <label htmlFor="" className='contact__form-tag'>Name</label>
                    <input type="name" name="name" className='contact__form-input' placeholder='Insert your name'/>
                </div>
                

                <div className='contact__form-div'>
                    <label htmlFor="" className='contact__form-tag'>Mail</label>
                    <input type="email" name="email" className='contact__form-input' placeholder='Insert your email'/>
                </div>


                <div className='contact__form-div contact__form-area'>
                    <label className='contact__form-tag'>Project</label>
                    <textarea name='project' cols="30" rows="10" className='contact__form-input' placeholder='Write your project'></textarea>
                </div>

                <button className='from__button' type="">
                    Send Massage
                </button>
                
            </form>
            </div>
            
        </div>
    </section>
    )
}
