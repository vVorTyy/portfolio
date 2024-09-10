import "./Qualification.css"
import React from 'react'
import { useState } from "react"


export default function Qualification(props) {

    const [togglestate, setTogglestate] = useState(1);
    const toggleTab = (index) => {
        setTogglestate(index);
    }
    
  return (
    <section ref={props.x} className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <h3 className="section__subtitle">My personel journey</h3>

        <div className="qualification__container container block">
                <div className="qualification__tabs">

                <div className={toggleTab === 1 
                    ? "qualification__button qualification_active button--flex" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>
    
              

                <div className={toggleTab === 2 
                    ? "qualification__button qualification_active button--flex" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience  
                </div> 
                </div>


                <div className="qualification__sections">
                    <div className={togglestate === 1
                     ?  "qualification__content qualification__content-active"
                    : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">High school</h3>
                                <span className="qualification__subtitle">Saudi Arabia - Riyadh </span>
                                <div className="qualification__calender">
                                    <i className="uil uil"></i> 2017 - persent
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">Business administration</h3>
                                <span className="qualification__subtitle">Saudi Arabia - Riyadh</span>
                                <div className="qualification__calender">
                                    <i className="uil uil"></i> 2021 - persent
                                </div>
                            </div>
                        </div>

                    </div>    

                    <div className={togglestate === 2
                     ?  "qualification__content qualification__content-active"
                    : "qualification__content"}>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Technical Support</h3>
                                <span className="qualification__subtitle">Salam - Riyadh</span>
                                <div className="qualification__calender">
                                    <i className="uil uil"></i> 2/2023 -  2/2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">Frontend developer</h3>
                                <span className="qualification__subtitle">AdFaz Company - Riyadh</span>
                                <div className="qualification__calender">
                                    <i className="uil uil"></i> 2/2024 -  4/2024
                                </div>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web developer</h3>
                                <span className="qualification__subtitle">freelancer Tawajjah Team - Riyadh</span>
                                <div className="qualification__calender">
                                    <i className="uil uil"></i> 
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>    
                </div>
            </div> 
    </section>
  )
}
