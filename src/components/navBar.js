import '../App.css';


const NavBar = () => {
    return (
        <header className=' bg-indigo-100 flex justify-between px-5 py-2 bg-primary text-black fixed w-full z-10'>
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
        </header>
    )
}

export default NavBar;
