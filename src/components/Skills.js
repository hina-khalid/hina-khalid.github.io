import '../App.css';

const techStack = ["JavaScript", "TypeScript", "Python", "React", "Node.js", "HTML", "CSS", "Tailwind", "Express", "Jest", "Storybook", "PostgreSQL", "NoSQL", "Git"];

const Skills = () => {
    return (
        <section id="skills" className='bg-gray-50 pt-10 pb-10'>
            <div className="px-5 md:flex-row flex-col items-center container mx-auto">
                <h1 className="text-4xl font-bold mb-5 border-b-[5px] w-[140px] border-indigo-200 pb-2">
                    Skills
                </h1>
                <ul className="grid grid-cols-5 gap-7">
                    {techStack.map((tech, i) => {
                        return (
                            <div className=''>
                                <li key={i} className='font-sans text-2xl antialiased font-semibold leading-tight text-transparent bg-gradient-to-tr from-pink-600 to-green-400 bg-clip-text'>{tech}</li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Skills;