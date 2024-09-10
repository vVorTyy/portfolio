import "./main-header.css"
import "../all.min.css"
import { useRef } from "react"



export default function MainHeader(props) {
  const home = useRef();
  return (
    <div id="main-header" className="block">
        <div ref={props.x} className="content container">
            <div className="box-one">
                <a href="https://www.instagram.com/tawajjah_/" target="_blank"><i className="uil uil-instagram"></i></a>
                <a href="https://dribbble.com/AbdualrhmanAb/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22AbdualrhmanAb%22&utm_content=%22About%20AbdualrhmanAb%22&utm_medium=Social_Share" target="_blank"><i className="uil uil-dribbble"></i></a>
                <a href="https://github.com/vVorTyy" target="_blank"><i className="uil uil-github-alt"></i></a>
            </div>
            <div className="box-two">
                <h1>Abdualrhman Abdali<i className="hand fa-solid fa-hand"></i> </h1>
                <h2 ><span>-------</span>  Frontend Developer</h2>
                <p>I'm a frontend developer based in Riyadh, and I'm very passionate and dedicated to my work</p>
                <a href="https://web.telegram.org" target="_blank">Say Hello <span><i className="fa-regular fa-paper-plane"></i></span></a>
            </div>
                <div className="box-three"></div>
        </div>



        <div className="s-s-content container">
        <div className="box-one">
            <div className="side-one">
            <a href="https://www.instagram.com/tawajjah_/" target="_blank"><i className="uil uil-instagram"></i></a>
                <a href="https://dribbble.com/AbdualrhmanAb/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22AbdualrhmanAb%22&utm_content=%22About%20AbdualrhmanAb%22&utm_medium=Social_Share" target="_blank"><i className="uil uil-dribbble"></i></a>
                <a href="https://github.com/vVorTyy" target="_blank"><i className="uil uil-github-alt"></i></a>
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
