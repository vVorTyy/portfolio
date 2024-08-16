import "../all.min.css";
import "./Projects.css";

const allData = [
  {
    id: 1,
    imgUrl: require("../My-projects/images/three.png"),
    title: "react",
    description:
      "T-Shirt Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt ",
    category: "man",
  },
  {
    id: 2,
    imgUrl: require("../My-projects/images/one.png"),
    title: "project2",
    description:
      "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt",
    category: "man",
  },
  {
    id: 3,
    imgUrl: require("../My-projects/images/two.png"),
    title: "project3",
    description:
      "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt",
    category: "man",
  },
  {
    id: 4,
    imgUrl: require("../My-projects/images/three.png"),
    title: "project4",
    description:
      "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt",
    category: "woman",
  },
  {
    id: 5,
    imgUrl: require("../My-projects/images/four.png"),
    title: "project4",
    description:
      "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt",
    category: "woman",
  },
  {
    id: 6,
    imgUrl: require("../My-projects/images/one.png"),
    title: "project4",
    description:
      "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt",
    category: "woman",
  },
  {
    id: 7,
    imgUrl: require("../My-projects/images/three.png"),
    title: "project4",
    description:
      "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt",
    category: "woman",
  },
  
];

export default function Projects() {
  return (
    <div id="projects">
      <h1>Projects<br/> <span>My creations</span></h1>
      <div className="content container">
      {allData.map((item, index) => {
        return (
            <div key={index} className="card">
              <img src={item.imgUrl}/>
              <div className="card-content">
                <p>{item.description}</p>
                <span className="services__button">View More<i className="uil uil-arrow-right services__button-icon"></i></span>
              </div>
            </div>
        );
      })}
      </div>
    </div>
  );
}
