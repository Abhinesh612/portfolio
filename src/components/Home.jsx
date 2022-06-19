import React from 'react'
import { HiOutlineGlobe } from 'react-icons/hi';

const Home = () => {
    
    return (
        <div name='home' className='bg-[#0a192f] h-screen w-full'>
            {/* section */}
            <div className='max-w-[980] ml-[50px] mx-auto px-8 flex flex-col justify-center h-full'>
                <span className='text-rose-500'>Nezuko-chan</span>
                <h1 className='text-4xl sm:text-7xl font-bold text-amber-100'>
                    Abhinesh Sharma
                </h1>
                <p className='py-4 max-w-[700px] text-amber-100'>
                    I'm Abhinesh Sharma. I am collage student from India who loves Computer and Mathamatics. But the most important I am a man of culture.
                </p>
                <div> <a href='https://github.com/Abhinesh612' target='_blank'>
                    <button className='test-amber-100 group px-6 py-3 my-2 flex items-center hover:bg-rose-400 bg-amber-400 rounded-md'>
                        Github
                        <span className='group-hover:-rotate-180 ml-2 duration-500'>
                            <HiOutlineGlobe className='ml-3' />
                        </span>
                    </button></a>
                </div>
            </div>
        </div>
    );
}

export default Home
