import '../App.css';
import lociSpotLogo from '../assets/lociSpots.png';
import beatbooksLogo from '../assets/beatBooks.png';
import devduxLogo from '../assets/devdux.png';

const projects = [
    {
        image: beatbooksLogo,
        title: 'BeatBooks',
        description: "Web application that recommends music albums based on books",
        sourceCode: "https://github.com/hina-khalid/Beat-Books"
    },
    {
        image: lociSpotLogo,
        title: 'LociSpots',
        description: "Web application that publishes crowd-sourced reviews of restaurants",
        sourceCode: "https://github.com/hina-khalid/Loci-Spots"
    },
    {
        image: devduxLogo,
        title: 'DevDux',
        description: "Developer tool that parses front-end React/Redux files",
        sourceCode: "https://github.com/oslabs-beta/DevDux"
    },
];

const Projects = () => {
    return (
        <section className='bg-teal-50 text-black px-5 py32'>
            <div className="about-info mb-5">
                <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-200 pb-2">
                    Projects
                </h2>
            </div>
            <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
                {projects.map((project, i) => {
                    return (
                        <div className="relative p-10" key={i} >
                            <img src={project.image} alt={project.title} />
                            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%] bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                                <p className="py-5 text-center font-bold px-2 text-black bg-indigo-50">
                                    {project.description}
                                </p>
                                <div className="mx-auto">
                                    <a
                                        href={project.sourceCode}
                                        className="px-5 py-2 bg-indigo-200 hover:bg-blue-800 font-bold"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section >
    );
};

export default Projects;