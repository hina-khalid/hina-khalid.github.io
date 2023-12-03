import './App.css';
import React from "react";
import About from './components/About';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Socials from './components/TalksPubs';

const App = () => {
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Socials />
      {/* <Footer /> */}
    </main>

    // <div className="App">
    //   <NavBar />
    //   <MainPage />
    //   <Footer />
    // </div >
  )
}


export default App;
