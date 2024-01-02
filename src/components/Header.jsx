import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Header() {

    useEffect(()=>{
        AOS.init({duration: 2000})
     },[])




  return (
    <div id='Home' className='p-8 flex items-center justify-between bg-white z-10'>
       <div className="flex flex-col cursor-pointer items-start group w-32 duration-300">
            <div className='w-full flex flex-col items-start' data-aos="flip-right">
               <div className="w-16 h-[3px] bg-violet-800 group-hover:w-full group-hover:bg-gradient-to-r from-white via-voilet-600 to-violet-800 duration-500 rounded-lg" ></div>
            </div>
            <h1 className='text-xl font-medium select-none' data-aos="fade-in">Richmond</h1>
       </div>

       <ul className='flex items-center gap-4' data-aos='fade-in'>
         <a href='#Home' className='cursor-pointer font-medium border-b-4 whitespace-nowrap hover:border-b-4  duration-500 rounded'>Home</a>
         <a href='#About' className='cursor-pointer font-medium whitespace-nowrap hover:border-b-4  duration-500 rounded'>About Me</a>
         <a href='#skills' className='cursor-pointer font-medium whitespace-nowrap hover:border-b-4  duration-500 rounded'>Skills</a>
         <a href='#services' className='cursor-pointer font-medium whitespace-nowrap hover:border-b-4  duration-500 rounded'>Services</a>
         <a href='#portfolio' className='cursor-pointer font-medium whitespace-nowrap hover:border-b-4  duration-500 rounded'>Portfolio</a>
       </ul>
    </div>
  )
}

export default Header
