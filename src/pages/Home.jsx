
import { GitHub, LinkedIn, Twitter, WavesTwoTone } from '@mui/icons-material'
import React from 'react'

function Home() {
  return (
    <div className='w-[90%] mx-auto h-[80vh] flex px-8 pt-16 lg:pt-24'>
      <div className="flex-1 flex flex-col items-center gap-4 text-violet-800 py-8">
         <a href=""><LinkedIn /></a>
         <a href=""><Twitter /></a>
         <a href=""><GitHub /></a>
      </div>
      <div className="flex-[2] flex flex-col items-start px-4 gap-4">
        <h1 className='text-4xl font-bold flex flex-col'>Hi, I am Richmond <span className='text-sm font-normal text-gray-500'>Frontend Developer</span></h1>
         <p className='text-sm text-gray-500 w-2/3'>High level experience in web design and development knowledge, producing quality work</p>

         <button className='p-2 text-white text-sm rounded-lg bg-violet-800 mt-8'>Contact Me</button>
      </div>
      <div className="flex-[2] p-8">
        <div className="w-[250px] h-[250px] bg-violet-800 rounded-tr-[170px] rounded-tl-[170px] rounded-bl-[190px] rounded-br-[300px] relative overflow-hidden flex justify-center items-center">
            <p className='text-[10em] absolute -bottom-12 left-5'>👷🏻‍♂️</p>
        </div>
      </div>
    </div>
  )
}

export default Home
