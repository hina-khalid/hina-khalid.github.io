import '../App.css';
import techTalk from '../assets/techTalk.mp4'
import devdux from '../assets/devduxArticle.png'

const TalksPublications = () => {
    return (
        <section id="talksPublications" className='bg-gray-50 pt-10 pb-10'>
            <div className="px-5 md:flex-row flex-col items-center container mx-auto">
                <h1 className="text-4xl font-bold mb-5 border-b-[5px] w-[340px] border-indigo-200 pb-2">
                    Talk & Publication
                </h1>
            </div>
            <div className='grid md:grid-cols-2 gap-20 container mx-auto pl-5'>
                <video src={techTalk} className="h-full bg-black border-4 border-purple-200" controls />
                <a href="https://devdux.medium.com/devdux-a-new-open-source-vs-code-extension-for-redux-rtk-f7d3b8838083">
                    <img src={devdux} alt="devdux article" className='border-4 border-purple-200 ' />
                </a>
            </div>
        </section>
    )
};

export default TalksPublications;