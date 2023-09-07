import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const backToTopButton = document.getElementById("backToTopButton");
    const backToAboutMeButton = document.getElementById("backToAboutMeButton");
    const backToProjectsButton = document.getElementById("backToProjectsButton");
    const backToContactMeButton = document.getElementById("backToContactMeButton");

    const backToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const backToAboutMe = () => {
      window.scrollTo({ top: 800, behavior: "smooth" });
    };
    const backToProjects = () => {
      window.scrollTo({ top: 1750, behavior: "smooth" });
    };
    const backToContactMe = () => {
      window.scrollTo({ top: 2750, behavior: "smooth" });
    };

    if (backToTopButton) {
      backToTopButton.addEventListener("click", backToTop);
    }
    if (backToAboutMeButton) {
      backToAboutMeButton.addEventListener("click", backToAboutMe);
    }
    if (backToProjectsButton) {
      backToProjectsButton.addEventListener("click", backToProjects);
    }
    if (backToContactMeButton) {
      backToContactMeButton.addEventListener("click", backToContactMe);
    }
  }, []);

  return (
    <>
      <div className="scroll-smooth">
        <header>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
        </header>
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
