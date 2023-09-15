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
    const backToTopButtonPhone = document.getElementById("backToTopButtonPhone");
    const backToTopButton = document.getElementById("backToTopButton");
    const backToAboutMeButton = document.getElementById("backToAboutMeButton");
    const backToProjectsButton = document.getElementById("backToProjectsButton");
    const backToContactMeButton = document.getElementById("backToContactMeButton");

    window.onscroll = function () {
      if ((document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) && window.screen.width <= 420) {
          backToTopButtonPhone.classList.remove("hidden");
      } else {
          backToTopButtonPhone.classList.add("hidden");
      }
    }

    const backToTopPhone = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const backToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const backToAboutMe = () => {
      window.scrollTo({ top: 750, behavior: "smooth" });
    };
    const backToProjects = () => {
      window.scrollTo({ top: 1700, behavior: "smooth" });
    };
    const backToContactMe = () => {
      window.scrollTo({ top: 2700, behavior: "smooth" });
    };

    if (backToTopButtonPhone) {
      backToTopButtonPhone.addEventListener("click", backToTopPhone);
    }
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
        <meta charset="utf-8"></meta>
        <header>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
        </header>
        <button id="backToTopButtonPhone" title="Back To Top" className="ease-in-out duration-300 hidden fixed z-10 bottom-8 right-8 border-0 w-16 h-16 rounded-full shadow-xl hover:scale-110 bg-gradient-to-tr from-tempdarkblue to-templightblue">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto text-tempwhite w-12"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"/></svg>
        </button>
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <ContactMe/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
