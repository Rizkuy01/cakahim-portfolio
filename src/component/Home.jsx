import React from 'react'
import {HiChevronDoubleDown} from 'react-icons/hi'
import Ellipse from '../aset/ellipse.png';
import {Link} from 'react-scroll';

const Home = () => {
    return (
        <div name='about' className='w-full md:h-screen bg-gradient-to-r from-[#03001C] to-[#301E67] to-[#3432a3] '>

            {/* Main */}
            <div className='max-w-[1000px] mx-auto pt-24 px-8 flex flex-col justify-center h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2'>
                    <div>
                        <img src={Ellipse} alt='ellipse image' style={{width: '300px'}} className='circle'/>
                    </div>
                    <div>
                        <p className='text-[#cffdff]'>Hello, it's me </p>
                        <h1 className='text-5xl font-bold text-[#4ef9ff]'>Muhammad<br></br> Rizky Saputra</h1>
                        <br />
                        <h2 className='text-xl font-bold text-[#c4e3e4]'>Lorem ipsum dolor sit amet.</h2>
                        <p className= 'text-[#c4e3e4] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt nam eaque, modi aperiam dignissimos non corporis. Dolores error, excepturi vitae, impedit beatae illo aliquam neque maiores possimus non soluta.</p>
                            <div>
                                <button className='text-white group border-2 px-6 py-3 my-3 flex items-center hover: bg-[#30c9ce] hover: border-[#30c9ce]'>
                                    <Link to='goals' smooth={true} duration={500}>Let's Go</Link>
                                <span>
                                <Link to='goals' smooth={true} duration={500}><HiChevronDoubleDown className='ml-3' /></Link>
                                </span>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Home;