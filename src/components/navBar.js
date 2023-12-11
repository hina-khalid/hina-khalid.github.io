import '../App.css';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <header className='bg-indigo-100 flex justify-between px-5 py-2 bg-primary text-black fixed w-full z-10'>
            <a href='/' className='text-1xl font-bold text-accent'>
                HK
            </a>
            <nav className='hidden md:block'>
                <ul className='flex'>
                    <li>
                        <a href='/#about' className='ml-5'>About</a>
                    </li>
                    <li>
                        <a href='/#projects' className='ml-5'>Projects</a>
                    </li>
                    <li>
                        <a href='/#skills' className='ml-5'>Skills</a>
                    </li>
                </ul>
            </nav>
            <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
                <ul className="flex flex-col">
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#blog">Blog</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                    <li>
                        <a href="/#resume">Resume</a>
                    </li>
                </ul>
            </nav>
            <button onClick={handleToggle} className="block md:hidden">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
            </button>
        </header>
    )
}

export default NavBar;
