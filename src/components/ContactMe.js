import '../App.css';
import pic from '../assets/hina.jpeg'

const ContactMe = () => {
    return (
        <section id="contact" className='bg-indigo-100 pl-10 p-5 text-center'>
            <div className="text-center cmd:w-[60%] mx-auto">
                <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[230px] mx-auto border-gray-400">
                    Contact Me
                </h2>
            </div>
            <div className='flex items-center m-auto w-1/4'>
                <div>
                    <img src={pic} alt='Hina' className='h-39 w-40 rounded-full bg-[59%_-4px] mr-5 block' />
                </div>
                <div>
                    <p className='text-xl font-semibold text-blue-600'> Hina Khalid </p>
                    <p>hinakh459@gmail.com</p>
                    <p>New York City, NY</p>
                </div>
            </div>
            <p className='text-xs items-center pt-5 container mx-auto'> 2023 built using JavaScript, React, Tailwind. Artwork by <a href='https://www.virdakhalid.com/' className='text-blue-600'>Virda Khalid</a></p>
        </section >
    )
}

export default ContactMe;

