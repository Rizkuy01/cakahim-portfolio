import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Default from '../aset/default.jpg';
import {Link} from 'react-scroll';
import {Link as Links} from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = ()=> setNav(!nav)
    return (
        <div className='fixed w-screen h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#03001C] to-[#301E67] to-[#3432a3]'>
            <div>
                <img src={Default} alt='default image' style={{width: '50px'}}/>
            </div>

            {/* Menu */}
                <ul className='hidden md:flex text-[#4ef9ff]'>
                    <li>
                    <Link to='about' smooth={true} duration={500}> About Me</Link>
                        {/* <a href="/about">About Me</a> */}
                    </li>
                    <li>
                    <Link to='goals' smooth={true} duration={500}> Visi&Misi</Link>
                        {/* <a href="/goals">Visi&Misi</a> */}
                    </li>
                    <li>
                    <Link to='project' smooth={true} duration={500}> Program Kerja</Link>
                        {/* <a href="/project">Program Kerja</a> */}
                    </li>
                    <li>
                    <Link to='contact'smooth={true} duration={500}> Message</Link>
                        {/* <a href="/contact">Message</a> */}
                    </li>
                    <li>
                    {/* <Link to='login'smooth={true} duration={500}> Log In</Link> */}
                        {/* <a href="/login">Log In</a> */}
                    </li>
                </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 text-white'>
                {!nav ? <FaBars /> : <FaTimes/>}
            </div>

            {/* Moblie Responsive
            <ul className={!nav ? 'hidden' : 'absoloute top-0 left-0 w-full h-screen bg-[#12123d] flex flex-wrap flex-col justify-center items-center text-white'}>
                    <li>
                        <a href="/">About Me</a>
                    </li>
                    <li>
                        <a href="/goals">Visi&Misi</a>
                    </li>
                    <li>
                        <a href="/project">Program Kerja</a>
                    </li>
                    <li>
                        <a href="/contact">Message</a>
                    </li>
            </ul> */}

            {/* social media */}
            <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='github w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#374151]'>
                        <a className='flex justify-between items-center w-full text-white'
                        href="https://github.com/Rizkuy01">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='mail w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
                        <a className='flex justify-between items-center w-full text-white '
                        href="mailto:rizkysaputraa2004@gmail.com">
                            Mail <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='instagram w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-white '
                        href="https://instagram.com/rzkysptrrr">
                            Instagram <FaInstagram size={30}/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;