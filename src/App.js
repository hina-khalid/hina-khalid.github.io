import './App.css';
import React from "react";
import { BrowserRouter } from 'react-router-dom'
import MainPage from './components/main';
import NavBar from './components/navBar';
import Footer from './components/footer'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <MainPage />
        <Footer />
      </BrowserRouter>
    </div >
  )
}


export default App;
