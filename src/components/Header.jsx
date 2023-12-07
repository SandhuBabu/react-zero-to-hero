import React from 'react'

const Header = () => {
    return (
        <header
        className='w-full md:h-[4em] h-[6em] flex flex-col md:flex-row justify-center items-center bg-green-400 text-white px-8'
        >
            <h1 className='lg:text-2xl font-semibold uppercase'>Let's Upgrade</h1>

            <div className='md:flex-1 flex justify-center'>
                <ul className='flex gap-4'>
                    <li className='font-medium cursor-pointer'>Home</li>
                    <li className='font-medium text-gray-200 cursor-pointer'>Products</li>
                    <li className='font-medium text-gray-200 cursor-pointer'>About</li>
                    <li className='font-medium text-gray-200 cursor-pointer'>Contact Us</li>
                </ul>
            </div>
        </header>
    )
}

export default Header