import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import dashboard from '../assets/projects/dashboard.png'
import squareup from '../assets/projects/squareup.png'
import land from '../assets/projects/land.png'
import ecom from '../assets/projects/ecom.png'
import food from '../assets/projects/food.png'
import blog from '../assets/projects/blog.png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Card = ({image,url,name}) => {
 
  return(
    <div data-aos="fade-up" className="inline w-[300px] h-[200px] sm:w-[380px] sm:h-[250px]  lg:w-[400px] lg:h-[250px] border rounded-lg relative overflow-hidden group cursor-pointer shrink-0">
          <div className='absolute w-full h-[calc(100%-10px)] scale-[0.5] opacity-0 top-0 left-0 bg-black/30 backdrop-blur-[2px] group-hover:opacity-[1] group-hover:scale-[1] duration-200 flex justify-center items-center'>
            <p className='text-xl font-bold text-white'>{name}</p>
          </div>
          <img src={image} alt="" className='w-full h-full object-cover'/>
          <div className='w-full absolute bottom-0 left-0 flex justify-between items-center p-2 bg-black/80 backdrop-blur shadow-lg'>
            <span className='text-sm text-gray-500'>{url}</span>

            <a title='Visit page' href={url} target='_blank' className='rounded bg-black text-white'><OpenInNewIcon /></a>
         </div>
    </div>
  )
}

function Portfolio() {
  const works = [
    {
      image: squareup,
      url: "https://square-up.vercel.app/",
      name: "SquareUp"
    },
    {
      image: ecom,
      url: "https://ecommerce-website1-36h1.vercel.app/",
      name: "Ecommerce Website"
    },
    {
      image: blog,
      url: "https://metablog-eight.vercel.app/",
      name: "Meta Blog"
    },
    {
      image: land,
      url: "https://react-projects-zeta-blue.vercel.app/",
      name: "Landing Page"
    },
    {
      image: dashboard,
      url: "https://www.example.com",
      name: "Admin Dashboard"
    },
    {
      image: food,
      url: "https://food-website-flax.vercel.app/",
      name: "Food Website"
    },
   
  ]




  return (
    <div id='portfolio' className='w-full'>

      <p className='text-center p-10 text-3xl font-bold text-blue-950' data-aos="fade-in"><span className='text-sm text-gray-500 font-normal block'>What I did?</span> Portfolio</p>
      
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
