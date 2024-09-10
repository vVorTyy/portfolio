import React, {useState} from "react";
import "../all.min.css"
import "./Services.css"





export default function Services(props) {

    
    const [togglestate, setTogglestate] = useState(0);
    const toggleTab = (index) => {
        setTogglestate(index);
    }
    return (
      <section ref={props.x} className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <h4 className="section__subtitle">What I offer</h4>

        <div className="services__container container">

        <div className="services__content">
                <div>
                    <i className="fa-solid fa-code -to-square services__icon"></i>
                    <h3 className="services__title">Web<br/> development</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3) }>
                    View More<i
                className="uil uil-arrow-right
                services__button-icon"></i></span>

                <div className={togglestate === 3  ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                    <i className="fa-solid fa-xmark services__modal-close"onClick={() => toggleTab(0)}></i>


                        <h3 className="services__modal-title">
                        Web development
                        </h3>
                        <p
                        className="services__modal-description">Programming and developing websites using the latest programming technologies</p>

                        <ul className="services__modal-services">
                        <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Convert designs to code
                                </p>
                            </li>



                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Implement interactive elements
                                </p>
                            </li>



                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Ensure device compatibility
                                </p>
                            </li>


                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Enhance accessibility"
                                </p>
                            </li>


                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Create a dashboard for the owner.
                                </p>
                            </li>
                            
                        </ul>

                    </div>
                </div>
            </div>


            <div className="services__content">
                <div>
                    <i className="uil uil-minus-path services__icon"></i>
                    <h3 className="services__title">
                        Viaual <br/> Designer
                         </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1) } >View More<i
                className="uil uil-arrow-right
                services__button-icon"></i></span>

                <div className={togglestate === 1  ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Viaual Designer</h3>
                        <p
                        className="services__modal-description">We design the visual identity of your company or website for you</p>

                        <ul className="services__modal-services">
                        <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Design concepts

                                </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Develop brand identity
                                </p>
                            </li>


                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Select colors and fonts
                                </p>
                            </li>



                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Create wireframes/prototypes
                                </p>
                            </li>
                            
                        </ul>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="fa-solid fa-pen services__icon"></i>
                    <h3 className="services__title">Web  <br/> Designing</h3>
                </div>

                <span className="services__button"onClick={() => toggleTab(2) }>View More<i
                className="uil uil-arrow-right
                services__button-icon"></i></span>

                <div className={togglestate === 2  ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                    <i className="fa-regular fa-circle-xmark services__modal-close" onClick={() => toggleTab(0)} ></i>
                        <h3 className="services__modal-title">Web Designer</h3>
                        <p
                        className="services__modal-description">Design the entire website in a way that matches the materials provided using Photoshop</p>

                        <ul className="services__modal-services">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Design web layouts
                                </p>
                            </li>


                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Ensure device compatibility
                                </p>
                            </li>


                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Develop visual elements
                                </p>
                            </li>



                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Select colors and fonts.
                                </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Create interactive prototype.
                                </p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle
                                services__modal-icon"></i>
                                <p className="services__modal-info">
                                Study user needs and design trends
                                </p>
                            </li>

                            
                        </ul>

                    </div>
                </div>
            </div>


        </div>


      </section>
  )
}