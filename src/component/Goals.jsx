import React from 'react'

const Goals = () => {
    return (
        <div name='goals' className='w-full md:h-screen bg-gradient-to-r from-[#03001C] to-[#301E67] to-[#3432a3] text-[#c4e3e4]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                {/* Header */}
                <div className='max-w-[1000px] w-full grid gap-8'>
                    <div className='sm: text-center pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#4ef9ff]'>
                            VISI & MISI
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid gap-8 px-4'>
                    <div className='sm: text-center font-bold text-xl'>
                        <p>Untuk terciptanya sebuah Himpunan yang bisa mengayomi dan berdedikasi bagi <br /> Mahasiswa dan Instansi, maka berikut ini adalah Visi serta Misi saya.</p>
                    </div>
                    <div></div>
                </div>

                {/* Main */}
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='text-xl font-bold inline border-b-2 border-[#4ef9ff]'>
                            VISI
                        </p>
                        <p className='py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident pariatur consectetur aliquam nostrum porro voluptatum qui. Sunt eum reiciendis placeat, temporibus eligendi quasi ad blanditiis ducimus vero tempora nobis repellendus.</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold inline border-b-2 border-[#4ef9ff]'>
                            MISI
                        </h4>
                        <p className='py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident pariatur consectetur aliquam nostrum porro voluptatum qui. Sunt eum reiciendis placeat, temporibus eligendi quasi ad blanditiis ducimus vero tempora nobis repellendus.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Goals;