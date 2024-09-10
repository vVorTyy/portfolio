import "../all.min.css"
import "./aboutMe.css"
import { useContext, useRef } from "react"


export default function AboutMe(props) {
  
  const about = useRef();

  return (
    <div ref={props.x} id="about-me">
      <h1>About Me<br/><span>My Introduction</span></h1>
      <div className="content container block">
        <div className="box-one">
          
        </div>
        <div className="box-two">

          <div className="side-one">
            <div className="card">
            <i className="fa-solid fa-medal"></i>
                <a href="">experience</a> 
                <h2>I have 1+ year experience"</h2>
            </div>

            <div className="card">
            <i className="fa-solid fa-globe"></i>
                <a href="">Completed</a> 
                <h2>Completed 20 + websites</h2>
            </div>

            <div className="card">
            <i className="fa-solid fa-paintbrush"></i>
                <a href="">Designed</a> 
                <h2>worked with 15+ easports teams"</h2>
            </div>
          </div>

          <div className="side-two">
            <p>Frontend Developer specializing in website and online store creation, with one year of experience delivering innovative and effective projects. I consider programming a core part of my personal identity.</p>
          </div>
              <a href="http://localhost:3000/static/media/CV.d48a147753ad7f4439ac.pdf" className="side-three" download>Download CV<i className="fa-solid fa-file-arrow-down" ></i></a>
        </div>

      </div>
    </div>
  )
}

