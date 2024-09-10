import "../all.min.css"
import "./Skills.css"

export default function Skills(props) {
    return (
    <div ref={props.x} id="skills">
      <h1>Skills<br/> <span>My technical level</span></h1>
      <div className="content container">

        <div className="card-one">
        <h2>Technical skills </h2>
            <div className="card-content">
                <div className="left-side">
                    <a href=""><i className="fa-solid fa-circle-check"></i>HTML/CSS<span><br/>advanced</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>Material UI<span><br/>advanced</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>JavaScript<span><br/>advanced</span></a>
                </div>
                <div className="right-side">
                    <a href=""><i className="fa-solid fa-circle-check"></i>Bootstap<span><br/>advanced</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>Git/Github<span><br/>advanced</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>React<span><br/>advanced</span></a>
                </div>
            </div>
        </div>

        <div className="card-two">
        <h2>Soft skills </h2>
            <div className="card-content">
            <div className="left-side">
                    <a href=""><i className="fa-solid fa-circle-check"></i>English<span><br/>advanced</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>Photoshop<span><br/>advanced</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>Communication<span><br/>advanced</span></a>
                </div>
                <div className="right-side">
                    <a href=""><i className="fa-solid fa-circle-check"></i>Adaptability<span><br/>advanced</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>Self-Learning<span><br/>advanced</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>UI/UX<span><br/>intermediate</span></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}










