import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import linkedinIcon from '../assets/linkedin.svg';
import gitHubIcon from '../assets/github.svg';
import mediumIcon from '../assets/medium.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className='name'>
                Created & Designed by Hina Khalid
            </div>
            <ul>
                <li>
                    <NavLink to='https://github.com/hina-khalid' > <img src={gitHubIcon} alt='github icon' /> </NavLink>
                </li>
                <li>
                    <NavLink to='https://devdux.medium.com/devdux-a-new-open-source-vs-code-extension-for-redux-rtk-f7d3b8838083'> <img src={mediumIcon} alt='medium icon' /> </NavLink>
                </li>
                <li>
                    <NavLink to='https://www.linkedin.com/in/hinakhalid/'><img src={linkedinIcon} alt='linkedin icon' /></NavLink>
                </li>
            </ul>
        </div >
    )
}

export default Footer;