import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


function NavBar() {
    return (
        <nav>
            <div className='name'>
                HK
            </div>
            <ul>
                <li>
                    <NavLink to='/'> About Me </NavLink>
                </li>
                <li>
                    <NavLink to='/projects'> Projects </NavLink>
                </li>
                <li>
                    <NavLink to='/skills'> Skills </NavLink>
                </li>
                <li>
                    <NavLink to='/socialMedia'> Social Media </NavLink>
                </li>
                <li>
                    <NavLink to='/resume'> Resume </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;