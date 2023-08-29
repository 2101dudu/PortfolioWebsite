import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';



function App() {

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet"></link>
      </head>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </>
  )
}

export default App
