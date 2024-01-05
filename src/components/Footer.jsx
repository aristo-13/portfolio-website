import React from 'react'
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'

function Footer() {
  const date = new Date()
  const Today = date.getFullYear()

  return (
    

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col cursor-pointer items-start group w-32 duration-300">
                <div className='w-full flex flex-col items-start' data-aos="flip-right">
                <div className="w-16 h-[3px] bg-violet-800 group-hover:w-full group-hover:bg-gradient-to-r from-white via-voilet-600 to-violet-800 duration-500 rounded-lg" ></div>
                </div>
                <h1 className='text-xl font-medium select-none' data-aos="fade-in">Richmond</h1>
           </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6"><LinkedIn /></a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6"><Twitter /></a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6"><GitHub /></a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {Today} <a href="https://flowbite.com/" class="hover:underline">RICHMOND™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer
