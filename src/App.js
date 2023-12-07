import './App.css';
import React from "react";
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TalkPublication from './components/TalksPubs'
import Contact from './components/ContactMe'

const App = () => {
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <TalkPublication />
      <Contact />
    </main>
  )
}


export default App;
