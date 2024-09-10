import "../all.min.css";
import "./Projects.css";

const allData = [
  {
    id: 1,
    imgUrl: require("../My-projects/images/three.png"),
    description:"Designed and developed an interactive JavaScript appointment booking form, aligning with the company’s visual identity and enhancing user engagement",
    category:"",
    link: "https://vvortyy.github.io/bookingForm/",
  },
  {
    id: 1,
    imgUrl: require("../My-projects/images/two.png"),
    description:"Developed a fully responsive website using vanilla JavaScript, ensuring cross-device compatibility and optimizing user experience.",
    category:"",
    link: "https://vvortyy.github.io/project1/",
  },
  {
    id: 1,
    imgUrl: require("../My-projects/images/one.png"),
    description:"Developed an e-commerce site with React and Material UI, integrating Stripe and adding responsive design with dark and light modes.",
    category:"",
    link:"https://vvortyy.github.io/muiproject/",
  },
];

export default function Projects(props) {
  return (
    <div ref={props.x} id="projects">
      <h1>
        Projects
        <br /> <span>My Creations</span>
      </h1>
      <div className="content container">
        {allData.map((item, index) => {
          return (
            <div key={index} className="card">
              <img src={item.imgUrl} />
              <div className="card-content">
                <p>{item.description}</p>
                <a className="services__button" href={item.link} target="_blank" rel="noreferrer">
                  View More
                  <i className="uil uil-arrow-right services__button-icon"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
