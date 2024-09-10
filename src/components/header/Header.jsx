import { Abdu } from "../..";
import MainHeader from "../../main-header/main-header";
import AboutMe from "../../about Me/aboutMe";
import "./header.css";
import React, { useContext, useState, useRef, useReducer } from "react";
import Skills from "../../Skills/Skills";
import Services from "../../Services/Services";
import Qualification from "../../Qualification/Qualification";
import Contact from "../../Contact/Contact";
import Projects from "../../My-projects/Projects";
import Footer from "../../Footer/Footer";

export default function Header() {
  const [Toggle, showMenu] = useState(false);

  const home = useRef();
  const about = useRef();
  const skills = useRef();
  const services = useRef();
  const qualification = useRef();
  const contact = useRef();
  const projects = useRef();
  const footer = useRef();

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a
            onClick={() => {
              return home.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
            className="nav__logo"
          >
            Abdualrhman
          </a>
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  onClick={() => {
                    return home.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className="nav__link"
                >
                  <i className="uil uil-estate nav__icon"></i>
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  onClick={() => {
                    return about.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className="nav__link"
                >
                  <i className="uil uil-user nav__icon"></i>
                  About
                </a>
              </li>
              <li className="nav__item">
                <a
                  onClick={() => {
                    return skills.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className="nav__link"
                >
                  <i className="uil uil-file-alt nav__icon"></i>
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  onClick={() => {
                    return services.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className="nav__link"
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i>
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  onClick={() => {
                    return qualification.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className="nav__link"
                >
                  <i className="uil uil-message nav__icon"></i>
                  Qualification
                </a>
              </li>

              <li className="nav__item">
                <a
                  onClick={() => {
                    return contact.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className="nav__link"
                >
                  <i className="uil uil-message nav__icon"></i>
                  Contact
                </a>
              </li>

              <li className="nav__item">
                <a
                  onClick={() => {
                    return projects.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className="nav__link"
                >
                  <i className="uil uil-message nav__icon"></i>
                  Projects
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>

      <MainHeader x={home} />
      <AboutMe x={about} />
      <Skills x={skills} />
      <Services x={services} />
      <Qualification x={qualification} />
      <Contact x={contact} />
      <Projects x={projects} />
      <Footer x={footer} />
    </>
  );
}
