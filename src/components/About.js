import '../App.css';
import mainImage from '../assets/hinaPortfolio.jpeg'

const About = () => {
    return (
        <section id="about" className='bg-gray-50'>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        Hi, I'm HINA.
                        <br />Welcome to my portfolio.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am an engineer with a background in JavaScript, React, Redux, Node.js, Express, and PostgreSQL, NoSQL databases.
                    </p>
                    {/* <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Past Work
                        </a>
                    </div> */}
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