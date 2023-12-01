import React from 'react';
import '../App.css';
import linkedinIcon from '../assets/linkedin.svg';
import gitHubIcon from '../assets/github.svg';
import mediumIcon from '../assets/medium.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='name'>
                Created & Designed by Hina Khalid
            </div>
            <ul>
                <li>
                    <a href='https://github.com/hina-khalid' > <img src={gitHubIcon} alt='github icon' /></a>
                </li>
                <li>
                    <a href='https://devdux.medium.com/devdux-a-new-open-source-vs-code-extension-for-redux-rtk-f7d3b8838083'> <img src={mediumIcon} alt='medium icon' /> </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/hinakhalid/'><img src={linkedinIcon} alt='linkedin icon' /></a>
                </li>
            </ul>
        </div >
    )
}

export default Footer;