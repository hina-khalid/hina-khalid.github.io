import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


function Footer() {
    return (
        <div className='footer'>
            <div className='name'>
                Created & Designed by Hina Khalid
            </div>
            <ul>
                <li>
                    <NavLink to='/Github'> Github </NavLink>
                </li>
                <li>
                    <NavLink to='/Linkedin'> Linkedin </NavLink>
                </li>
                <li>
                    <NavLink to='/Medium'> Medium </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Footer;