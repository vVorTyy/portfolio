import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header.jsx';
import MainHeader from './main-header/main-header.js';
import AboutMe from './about Me/aboutMe';
import Skills from './Skills/Skills';
import Services from './Services/Services';
import Qualification from './Qualification/Qualification';
import App from './App.js';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Projects from './My-projects/Projects.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <App/>
  <MainHeader/>
  <AboutMe/>
  <Skills/>
  <Services/>
  <Qualification/>
  <Contact/>
  <Projects/>
  <Footer/>
</div>);
