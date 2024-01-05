import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import dashboard from '../assets/projects/dashboard.png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Card = ({image,url,name}) => {
 
  return(
    <div data-aos="fade-up" className="inline w-[300px] h-[200px] sm:w-[380px] sm:h-[250px]  lg:w-[400px] lg:h-[250px] border rounded-lg relative overflow-hidden group cursor-pointer shrink-0">
          <div className='absolute w-full h-[calc(100%-10px)] scale-[0.5] opacity-0 top-0 left-0 bg-white/30 group-hover:opacity-[1] group-hover:scale-[1] duration-200 flex justify-center items-center'>
            <p className='text-xl font-bold text-black'>{name}</p>
          </div>
          <img src={image} alt="" className='w-full h-full object-cover'/>
          <div className='w-full absolute bottom-0 left-0 flex justify-between items-center p-2 bg-black/50 backdrop-blur shadow-lg'>
            <span className='text-sm text-gray-500'>{url}</span>

            <button className='rounded bg-black text-white'><OpenInNewIcon /></button>
         </div>
    </div>
  )
}

function Portfolio() {
  const works = [
    {
      image: dashboard,
      url: "https://www.example.com",
      name: "Admin Dashboard"
    },
    {
      image: dashboard,
      url: "https://www.example.com",
      name: "Admin Dashboard"
    },
    {
      image: dashboard,
      url: "https://www.example.com",
      name: "Admin Dashboard"
    },
    {
      image: dashboard,
      url: "https://www.example.com",
      name: "Admin Dashboard"
    },
    {
      image: dashboard,
      url: "https://www.example.com",
      name: "Admin Dashboard"
    },
    {
      image: dashboard,
      url: "https://www.example.com",
      name: "Admin Dashboard"
    },
    {
      image: dashboard,
      url: "https://www.example.com",
      name: "Admin Dashboard"
    },
    {
      image: dashboard,
      url: "https://www.example.com",
      name: "Admin Dashboard"
    },
    {
      image: dashboard,
      url: "https://www.example.com",
      name: "Admin Dashboard"
    },
  ]




  return (
    <div id='portfolio' className='w-full'>

      <p className='text-center p-10 text-3xl font-bold text-blue-950' data-aos="fade-in"><span className='text-sm text-gray-500 font-normal'>What I did?</span> Portfolio</p>
      
      <div className=''>
        <p className='px-6 text-sm animate-[slide_1s_ease-in-out_infinite]'>Scroll right <KeyboardDoubleArrowRightIcon /></p>
        <div className='space-x-2 p-4 flex overflow-x-auto no-scrollbar'>
          {
            works.map((work,index) => (
              <Card 
                key={index}
                {...work}
              />
  
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
