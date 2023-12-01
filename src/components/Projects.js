import '../App.css';

const projects = [
    {
        title: 'BeatBooks',
        description: "Web application that recommends music albums based on books",
        sourceCode: "https://github.com/hina-khalid/Beat-Books"
    },
    {
        title: 'LociSpots',
        description: "Web application that publishes crowd-sourced reviews of restaurants",
        sourceCode: "https://github.com/hina-khalid/Loci-Spots"
    }
];

const Projects = () => {
    const project = [...projects];
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
                        <div className="relative" key={i}>
                            <img src={project.img} alt={project.title} />
                            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                                <p className="py-5 text-center font-bold px-2 text-white">
                                    {project.desc}
                                </p>

                                <div className="mx-auto">
                                    <a
                                        href={project.sourceCode}
                                        className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;