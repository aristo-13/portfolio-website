import React, { useState } from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import photo from '/photo.png'

function About() {
const [currIndex,setCurrIndex] = useState(0)

  return (
    <div id='About' className='w-full'>
       
      <p className='text-center p-10 text-3xl font-bold text-blue-950' data-aos="fade-in"><span className='text-sm text-gray-500 font-normal block'>Who am I?</span> About Me</p>

      <div className='w-full md:w-[90%] px-auto flex flex-col md:flex-row items-center justify-center'>
         <div className="flex-1 flex justify-center items-center">
            <div data-aos="fade-in" data-aos-offset="300" className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] border-b-2 border-b-violet-600 md:border-b-0 rounded-full bg- overflow-hidden">
                 <img src={photo} alt="" className="scale-[0.9] absolute -right-2"/>
            </div>
         </div>
         <div className='flex-1'>
            <h1 className='px-4 text-violet-700 font-medium'>{currIndex +1}/2</h1>
          <div className=" flex overflow-hidden p-4">
            
            {(currIndex === 0) && <div data-aos="fade-in"  data-aos-offset="300" className='text-gray-700 w-full shrink-0 flex flex-col gap-4 items-start'>
            Richmond is an ambitious mechanical engineering student with a fervent passion for web development. As a web developer, he brings a unique blend of engineering problem-solving skills and coding expertise to the table. Currently pursuing a degree in mechanical engineering, Richmond is driven by a relentless pursuit of knowledge in the dynamic field of web development. His proficiency in programming languages and dedication to staying current with the latest technological advancements showcase his commitment to excellence.

                <button className='p-2 text-violet-700' onClick={()=>setCurrIndex(1)}>Contiue Reading <KeyboardDoubleArrowRightIcon /></button>
            </div>}
            {(currIndex === 1) && <div data-aos="fade-in"  data-aos-offset="300" className='text-gray-700 w-full shrink-0 flex flex-col gap-4 items-start'>
            Outside of engineering, Richmond is interested in using technology to innovate in manufacturing. He sees potential in integrating technology in areas like automation and process optimization. With a structured and analytical approach from his mechanical engineering background, Richmond is well-suited to contribute to technological projects in manufacturing. His diverse skills make him a great fit for roles that need a mix of engineering and web development expertise. Richmond looks forward to making meaningful contributions at the intersection of mechanical engineering and technology.
                <button className='p-2 text-violet-700' onClick={()=>setCurrIndex(0)}><KeyboardDoubleArrowLeftIcon /> Go back</button>
            </div>}
        </div>

        <a href='/RichmondOMensahResume.pdf' download="Richmond's Resume" className='mx-4 px-4 py-1 rounded-lg border text-violet-800 mt-8 text-lg font-medium'>CV <FileDownloadIcon /></a>
         </div>
        
      </div>

    </div>
  )
}

export default About
