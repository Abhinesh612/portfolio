import React, { useState } from 'react';
import { Link } from 'react-router';
import {
    FaBars,
    FaTimes,
    FaInstagram,
    FaGithub,
    FaLinkedinIn,
} from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='fixed top-0 w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300'>
            <div>
                <span>Abhiensh</span>
            </div>

            {/* MEnu */}

            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Journey</li>
                <li>Contacts</li>
            </ul>

            {/* collapse-btn */}

            <div onClick={handleClick} className='md:hidden z-10 pr-2'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}

            <ul className={
                !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }>
                <li className='py-6 text-4xl'><Link to='home' smooth={true} duration={500}> Home </Link></li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Journey</li>
                <li className='py-6 text-4xl'>Contacts</li>
            </ul>

            {/* social iocons */}

            <div className='hidden lg:flex flex-col fixed top-[40%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-cyan-400'>
                        <a className='w-[150px] h-[50px] font-bold flex justify-between items-center'>
                            Linkedin <FaLinkedinIn size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-green-600'>
                        <a href='https://github.com/Abhinesh612' target='_blank' className='w-[150px] h-[50px] font-bold flex justify-between items-center'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-pink-500'>
                        <a href='https://www.instagram.com/see_you__life/' target='_blank' className='w-[150px] h-[50px] font-bold flex justify-between items-center'>
                        Instagram <FaInstagram size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar
