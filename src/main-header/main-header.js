import "./main-header.css"
import "../all.min.css"

export default function MainHeader() {
  return (
    <div id="main-header">
        <div className="content container">
            <div className="box-one">
                <a href="https://www.instagram.com/" target="_blank"><i className="uil uil-instagram"></i></a>
                <a href="https://www.dribble.com/" target="_blank"><i className="uil uil-dribbble"></i></a>
                <a href="https://www.github.com/" target="_blank"><i className="uil uil-github-alt"></i></a>
            </div>
            <div className="box-two">
                <h1>Abdualrhman Abdali <i className="hand fa-solid fa-hand"></i> </h1>
                <h2 ><span>-------</span>  Frontend Developer</h2>
                <p>I'm a frontend developer based in Riyadh, and I'm very passionate and dedicated to my work</p>
                <a href="https://web.telegram.org" target="_blank">Say Hello <span><i className="fa-regular fa-paper-plane"></i></span></a>
            </div>
                <div className="box-three"></div>

            
        </div>

        <div className="s-s-content container">
        <div className="box-one">
            <div className="side-one">
            <a href="" target="_blank"><i className="uil uil-instagram"></i></a>
                <a href="" target="_blank"><i className="uil uil-dribbble"></i></a>
                <a href="" target="_blank"><i className="uil uil-github-alt"></i></a>
            </div>
            <div className="side-two"></div>
          </div>




            <div className="box-two">
                <h1>Abdualrhman Abdali <i className="hand fa-solid fa-hand"></i> </h1>
                <h2 ><span>-------</span>  Frontend Developer</h2>
                <p>I'm creative designer based in Riyadh, and I'm very passionate and dedicated to my work</p>
                <a href="">Say Hello <span><i className="fa-regular fa-paper-plane"></i></span></a>
            </div>
            
          
        <div className="scroll-down">Scroll down <i className="fa-solid fa-arrow-down"></i></div>
      </div>

    </div>
  )
}
