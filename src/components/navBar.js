import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Resume from './Resume'


const NavBar = () => {
    return (
        <BrowserRouter>
            <div className='curvedDivider'>
                <nav className='navigationalBar'>
                    <div className='name'>
                        <a href="/main.js">HK</a>
                    </div>
                    <ul>
                        <li>
                            <NavLink to='/resume'> Resume </NavLink>
                        </li>
                        <li>
                            <NavLink to='/skills'> Skills </NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects'> Projects </NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/resume" element={<Resume />} />
                </Routes>
                {/* <svg viewBox="0 0 1440 319">
                    <path fill="white" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg> */}
            </div>
        </BrowserRouter >
    )
}

export default NavBar;
