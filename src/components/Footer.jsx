import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full min-h-[10em] bg-gray-900 text-white px-8 py-4'>
            <h1 className='text-xl text-green-500 font-semibold uppercase'>Let's Upgrade</h1>
            <a
                target='_blank'
                href="https://letsupgrade.in/"
                className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md inline-block mt-4'
            >Sign Up For Free</a>

            <p
                className='my-4 font-medium'
            >LetsUpgrade EdTech Pvt. Ltd. ©{new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer