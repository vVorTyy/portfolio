import "../all.min.css"
import "./Skills.css"

export default function Skills() {
    return (
    <div id="skills">
      <h1>Skills<br/> <span>My technical level</span></h1>
      <div className="content container">

        <div className="card-one">
        <h2>Frontend development</h2>
            <div className="card-content">
                <div className="left-side">
                    <a href=""><i className="fa-solid fa-circle-check"></i>HTML<span><br/>advanced</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>CSS<span><br/>advanced</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>JavaScript<span><br/>advanced</span></a>
                </div>
                <div className="right-side">
                    <a href=""><i className="fa-solid fa-circle-check"></i>Bootstap<span><br/>advanced</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>Git<span><br/>advanced</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>React<span><br/>advanced</span></a>
                </div>
            </div>
        </div>

        <div className="card-two">
        <h2>backend development</h2>
            <div className="card-content">
            <div className="left-side">
                    <a href=""><i className="fa-solid fa-circle-check"></i>Php<span><br/>intermediate</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>Sql<span><br/>intermediate</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>C#<span><br/>intermediate</span></a>
                </div>
                <div className="right-side">
                    <a href=""><i className="fa-solid fa-circle-check"></i>C++<span><br/>intermediate</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>nongo DB<span><br/>intermediate</span></a>
                    <a href=""><i className="fa-solid fa-circle-check"></i>laravel<span><br/>intermediate</span></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}










