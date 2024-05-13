import "../all.min.css"
import "./aboutMe.css"



export default function AboutMe() {
  return (
    <div id="about-me">
      <h1>About Me <br/> <span>My introduction</span></h1>
      <div className="content container">
        <div className="box-one">
          
        </div>
        <div className="box-two">

          <div className="side-one">
            <div className="card">
            <i className="fa-solid fa-medal"></i>
                <a href="">experience</a> 
                <h2>1 + years</h2>
            </div>


            <div className="card">
            <i className="fa-regular fa-newspaper"></i>
                <a href="">Completed</a> 
                <h2>20 + projects</h2>
            </div>


            <div className="card">
            <i className="fa-solid fa-headset"></i>
                <a href="">Support</a> 
                <h2>Online 24/7</h2>
            </div>
          </div>

          <div className="side-two">
            <p>frontend developer, I create websites and online stors I have a year of experience and many clints are happy with the projects carried out</p>
          </div>
              <a href="http://localhost:3000/static/media/CV.d48a147753ad7f4439ac.pdf" className="side-three" download>Download CV<i className="fa-solid fa-file-arrow-down" ></i></a>
        </div>
      </div>
    </div>
  )
}

