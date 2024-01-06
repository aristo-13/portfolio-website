
import { GitHub, LinkedIn, Twitter, WavesTwoTone } from '@mui/icons-material'
import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CallIcon from '@mui/icons-material/Call';
import PublicIcon from '@mui/icons-material/Public';
import photo from '/photo.png'

function Home() {
  return (
    <div className='h-[60vh] lg:h-[90vh] w-full flex mx-auto justify-center  border-black gap-6 pt-16 relative' >
        {/* <img src={bg} alt="" /> */}
       
            <div className="flex flex-col items-center gap-4 text-violet-800 py-8" data-aos="fade-in">
                <a href="https://www.linkedin.com/in/richmond-mensah-osei-287675275/"><LinkedIn /></a>
                <a href="https://twitter.com/_aristodev"><Twitter /></a>
                <a href="https://github.com/aristo-13"><GitHub /></a>
            </div>
            <div className=" flex flex-col items-start px-2 lg:px-4 gap-6">
                <h1 className='text-3xl sm:text-4xl lg:text-7xl font-bold flex flex-col modal-text' data-aos="fade-in" data-aos-duration="300"><span className='opacity-[0.8]'>Hi!, I am </span> <span>Richmond</span> <span className='text-xl font-normal text-gray-500'>Web Developer</span></h1>
                 {/* <p className='text-sm text-gray-500 sm:w-2/3'>High level experience in web design and development knowledge, producing quality work</p> */}

                <div className='flex items-center gap-2'>
                  <a href='#contact' className='p-2 text-white text-sm rounded-lg bg-violet-800 mt-8 flex items-center gap-2'><CallIcon fontSize='sm'/><span className='hidden md:block'>Contact Me</span></a>
                  <a href='#portfolio' className='p-2 text-white text-sm rounded-lg bg-violet-800 mt-8 flex items-center gap-2'><PublicIcon fontSize='sm'/><span className='hidden md:block'>Visit my Works</span></a>
                  <a href='/RichmondOMensahResume.pdf' download="Richmond's Resume" className='mx-4 px-4 py-1 rounded-lg border text-violet-800 mt-8 md:text-lg font-medium border-violet-800'>CV <FileDownloadIcon fontSize='sm'/></a>
                </div>
            </div>
       
     
    
        <div data-aos="fade-in" className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] border-b-4 border-b-violet-800 rounded-full relative overflow-hidden hidden sm:flex justify-center items-center -order-1 sm:order-1">
           <img src={photo} alt="" className="absolute scale-[0.8] -bottom-10 -right-2"/>
         </div>


      <a href='#About' className='absolute whitespace-nowrap bottom-5 lg:bottom-14 font-medium text-violet-700'>
         Scroll Down <span className=' animate-ping'><KeyboardDoubleArrowDownIcon /></span>
      </a>
    </div>
  )
}

export default Home
