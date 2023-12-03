import '../App.css';
import mainImage from '../assets/hinaPortfolio.jpeg'
import linkedinLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg'
import mediumLogo from '../assets/medium.svg'

const About = () => {
    return (
        <section id="about" className='bg-gray-50 pl-10'>
            <div className="container mx-auto flex md:flex-row flex-col items-center">
                <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-200 pb-2">
                        Hi there, I'm Hina
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am an engineer with a background in JavaScript, React, Redux, Node.js, Express, and PostgreSQL, NoSQL databases.
                    </p>
                    <div className="flex justify-center gap-10">
                        <a
                            href="https://www.linkedin.com/in/hinakhalid/">
                            <img src={linkedinLogo} alt="linkedin" />
                        </a>
                        <a href="https://devdux.medium.com/">
                            <img src={mediumLogo} alt="medium" />
                        </a>
                        <a href="https://github.com/hina-khalid">
                            <img src={githubLogo} alt="github" />
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        alt="hinaImage"
                        src={mainImage}
                    />
                </div>
            </div>
        </section >
    )
}

export default About;