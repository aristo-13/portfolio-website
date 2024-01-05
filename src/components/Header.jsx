import React, { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import menu from '../assets/menu.svg'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import PublicIcon from '@mui/icons-material/Public';
import CallIcon from '@mui/icons-material/Call';
import { CloseOutlined } from '@mui/icons-material'

function Header() {
  const [Menu,setMenu] = useState(false)

    useEffect(()=>{
        AOS.init({duration: 2000})
     },[])




  return (
    <div id='Home' className='p-8 flex items-center justify-between z-10'>
       <div className="flex flex-col cursor-pointer items-start group w-32 duration-300">
            <div className='w-full flex flex-col items-start' data-aos="flip-right">
               <div className="w-16 h-[3px] bg-violet-800 group-hover:w-full group-hover:bg-gradient-to-r from-white via-voilet-600 to-violet-800 duration-500 rounded-lg" ></div>
            </div>
            <h1 className='text-xl font-medium select-none' data-aos="fade-in">Richmond</h1>
       </div>

       <ul className='hidden lg:flex items-center gap-4' data-aos='fade-in'>
         <a href='#Home' className='cursor-pointer font-medium border-b-4 whitespace-nowrap border-violet-800/60 hover:border-b-4  duration-500 rounded'>Home</a>
         <a href='#About' className='cursor-pointer font-medium whitespace-nowrap border-violet-800/60 hover:border-b-4  duration-500 rounded'>About Me</a>
         <a href='#skills' className='cursor-pointer font-medium whitespace-nowrap border-violet-800/60 hover:border-b-4  duration-500 rounded'>Skills</a>
         <a href='#portfolio' className='cursor-pointer font-medium whitespace-nowrap border-violet-800/60 hover:border-b-4  duration-500 rounded'>Portfolio</a>
         <a href='#contact' className='cursor-pointer font-medium whitespace-nowrap border-violet-800/60 hover:border-b-4  duration-500 rounded'>Contact</a>
       </ul>

       <button onClick={()=>setMenu(!Menu)} className='lg:hidden'>
         <img src={menu} alt=""/>
       </button>

       {Menu &&<div className='fixed -right-4 top-[60px] z-10 flex flex-col justify-center items-start' data-aos='fade-in'>
          <button onClick={()=>setMenu(false)} className='p-2'><CloseOutlined /></button>
         <ul className='flex flex-col justify-center items-center gap-4 pl-2 py-6 px-6  bg-white rounded-full shadow-sm border border-violet-800'>
            <a href='#Home'><HomeIcon /></a>
            <a href='#About'><InfoIcon /></a>
            <a href='#skills'><CodeIcon /></a>
            <a href='#portfolio'><PublicIcon /></a>
            <a href='#contact'><CallIcon /></a>
       </ul>
       </div>}
    </div>
  )
}

export default Header
