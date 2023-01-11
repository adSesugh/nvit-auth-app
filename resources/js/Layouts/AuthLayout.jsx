import React from 'react'

const AuthLayout = ({ children, header }) => {
    return (
        <div className='flex h-screen'>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col justify-center items-center md:w-1/2 xxs:hidden xs:hidden bg-[url("/images/nvit_bg.png")]'>
                    <div className='bg-gray-100/60 shadow-2xl rounded -py-2 px-1'>
                        <h1 className='text-[70px] text-blue-600 font-bold font-sans -mt-3 uppercase'>New Vision</h1>
                        <h6 className='text-[31px] text-blue-600 font-bold font-sans -mt-8 uppercase'>Institute of Technology</h6>
                    </div>
                </div>
                <div className='flex flex-col sm:w-1/2 xs:w-full mx-6 xxs:w-full h-full justify-center items-center'>
                    {header}
                    <div className='w-full sm:max-w-md mt-6 px-6 py-6 bg-white shadow-md overflow-hidden sm:rounded-lg'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
