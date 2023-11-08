import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


function NavBar() {
    return (
        <nav className='navigationalBar'>
            <div className='name'>
                <a href="mainPage">HK</a>
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
    )
}

export default NavBar;