import "../all.min.css";
import "./Projects.css";

const allData = [
  {
    id: 1,
    imgUrl: require("../My-projects/images/ten.png"),
    description:"Designed and developed an interactive JavaScript appointment booking form, aligning with the company’s visual identity and enhancing user engagement",
    category:"",
    link: "https://vvortyy.github.io/bookingForm/",
  },
  {
    id: 2,
    imgUrl: require("../My-projects/images/sex.png"),
    description:"Developed a fully responsive website using vanilla JavaScript, ensuring cross-device compatibility and optimizing user experience.",
    category:"",
    link: "https://vvortyy.github.io/project1/",
  },
  {
    id: 3,
    imgUrl: require("../My-projects/images/seven.png"),
    description:"Developed an e-commerce site with React and Material UI, integrating Stripe and adding responsive design with dark and light modes.",
    category:"",
    link:"https://vvortyy.github.io/muiproject/",
  },
  {
    id: 4,
    imgUrl: require("../My-projects/images/four.png"),
    description:"Developed an e-commerce site with React and Material UI, integrating Stripe and adding responsive design with dark and light modes.",
    category:"",
    link:"https://vvortyy.github.io/ecommrece2/",
  },
  {
    id: 5,
    imgUrl: require("../My-projects/images/three.png"),
    description:"Developed an e-commerce site with React and Material UI, integrating Stripe and adding responsive design with dark and light modes.",
    category:"",
    link:"https://vvortyy.github.io/Jewellery/",
  },
  {
    id: 6,
    imgUrl: require("../My-projects/images/one.png"),
    description:"Developed agit n e-commerce site with React and Material UI, integrating Stripe and adding responsive design with dark and light modes.",
    category:"",
    link:"https://vvortyy.github.io/EcommrceWebsite/",
  },
  {
    id: 7,
    imgUrl: require("../My-projects/images/Screenshot 2024-09-18 162821.png"),
    description:"Developed an e-commerce site with React and Material UI, integrating Stripe and adding responsive design with dark and light modes.",
    category:"",
    link:"https://vvortyy.github.io/EcommrceWebsite/",
  },
  {
    id: 8,
    imgUrl: require("../My-projects/images/Screenshot 2024-09-18 163904.png"),
    description:"Developed an e-commerce site with React and Material UI, integrating Stripe and adding responsive design with dark and light modes.",
    category:"",
    link:"https://vvortyy.github.io/vorty-html/",
  },
  {
    id: 9,
    imgUrl: require("../My-projects/images/Screenshot 2024-09-18 163951.png"),
    description:"Developed an e-commerce site with React and Material UI, integrating Stripe and adding responsive design with dark and light modes.",
    category:"",
    link:"https://vvortyy.github.io/TawajjahAgency/",
  },
  {
    id: 10,
    imgUrl: require("../My-projects/images/Screenshot 2024-09-18 164029.png"),
    description:"Developed an e-commerce site with React and Material UI, integrating Stripe and adding responsive design with dark and light modes.",
    category:"",
    link:"https://vvortyy.github.io/watchesStore/",
  },
  {
    id: 11,
    imgUrl: require("../My-projects/images/Screenshot 2024-09-18 164121.png"),
    description:"Developed an e-commerce site with React and Material UI, integrating Stripe and adding responsive design with dark and light modes.",
    category:"",
    link:"https://vvortyy.github.io/VortyShopStore/",
  },
  {
    id: 12,
    imgUrl: require("../My-projects/images/Screenshot 2024-09-18 164159.png"),
    description:"Developed an e-commerce site with React and Material UI, integrating Stripe and adding responsive design with dark and light modes.",
    category:"",
    link:"https://vvortyy.github.io/VORTYSTORE/",
  },
  
];

export default function Projects(props) {
  return (
    <div ref={props.x} id="projects">
      <h1>
        Projects
        <br /> <span>My Creations</span>
      </h1>
      <div className="content container block">
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
