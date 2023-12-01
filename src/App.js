import './App.css';
import React from "react";
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <About />
      <NavBar />
      <Footer />
    </main>

    // <div className="App">
    //   <NavBar />
    //   <MainPage />
    //   <Footer />
    // </div >
  )
}


export default App;
