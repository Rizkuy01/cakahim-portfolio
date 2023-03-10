import React from 'react'
import Persegi from '../aset/persegi.png'

const Project = () => {
    return (
        <div name="project" className=' w-full md:h-screen text-[#c4e3e4] bg-gradient-to-r from-[#03001C] to-[#301E67] to-[#3432a3]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#4ef9ff]'>Program Unggulan</p>
                    <p className='py-6'>// Lorem ipsum dolor sit amet.</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols3 gap-4'>

                    {/* Card-1 */}
                    <div style={{backgroundImage: `url(${Persegi})`}} className='content-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'>
                        <div className='opacity-0 group-hover:opacity-100 duration-500'>
                            <span className='bg-gray-500 rounded-md text-2xl font-bold text-white tracking-wider'>
                                Lorem, ipsum.
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#30c9ce] text-white font-bold text-lg'>details</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card-2 */}
                    <div style={{backgroundImage: `url(${Persegi})`}} className='content-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'>
                        <div className='opacity-0 group-hover:opacity-100 duration-500'>
                            <span className='bg-gray-500 rounded-md text-2xl font-bold text-white tracking-wider'>
                                Lorem, ipsum.
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#30c9ce] text-white font-bold text-lg'>details</button>
                                </a>
                            </div>bg-gray-500 rounded-md 
                        </div>
                    </div>

                    {/* Card-3 */}
                    <div style={{backgroundImage: `url(${Persegi})`}} className='content-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'>
                        <div className='opacity-0 group-hover:opacity-100 duration-500'>
                            <span className='bg-gray-500 rounded-md text-2xl font-bold text-white tracking-wider'>
                                Lorem, ipsum.
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#30c9ce] text-white font-bold text-lg'>details</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card-4 */}
                    <div style={{backgroundImage: `url(${Persegi})`}} className='content-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'>
                        <div className='opacity-0 group-hover:opacity-100 duration-500'>
                            <span className='bg-gray-500 rounded-md text-2xl font-bold text-white tracking-wider'>
                                Lorem, ipsum.
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#30c9ce] text-white font-bold text-lg'>details</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project;