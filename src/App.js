import './App.css';
import React from "react";
import About from './components/About';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import Projects from './components/Projects';

const App = () => {
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
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
