import React from 'react';
import { Progress } from 'flowbite-react';
import arroww from '../assets/noun-dashed-arrow-2885275.svg';
import html from '../assets/Html.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import react from '../assets/react.svg';
import ts from '../assets/ts.svg';
import mui from '../assets/mui.svg';
import tailwind from '../assets/tailwind.svg';
import strapi from '../assets/strapi.svg';
import firebase from '../assets/firebase.svg';
import py from '../assets/python.svg';

const progressComp = ({ icon, length, name, color }) => {
  return (
    <div className='flex items-center gap-2 w-full p-2 bg-[whitesmoke]' data-aos="slide-left" data-aos-offset="200">
      <img src={icon} alt={name} className='w-[30px] rounded-lg' />
      <div className='flex-[4]'>
        <Progress
          progress={length}
          textLabel={name}
          size='lg'
          labelProgress
          labelText
          color={color}
        />
      </div>
    </div>
  );
};

function Skill() {
  return (
    <div id='skills' className='w-full'>
      <p
        className='text-center p-10 text-3xl font-bold text-blue-950'
        data-aos='fade-in'
      >
        <span className='text-sm text-gray-500 font-normal'>What I use?</span>
        My Skills
      </p>

      <div className='flex flex-col md:flex-row h-[80%] px-6 py-6'>
        <div className='flex-1 h-full relative' data-aos="fade-up" data-aos-offset="200">
          <h1 className='text-center p-4 text-blue-950 font-bold text-xl '>
            Frontend Technologies{' '}
            <img
              src={arroww}
              alt=''
              className='absolute h-[120px] right-0 top-0'
            />
          </h1>

          <div className='w-full p-4'>
            {progressComp({
              icon: html,
              length: 99,
              name: 'HTML',
              color: 'pink',
            })}
            {progressComp({
              icon: css,
              length: 90,
              name: 'CSS',
              color: 'blue',
            })}
            {progressComp({
              icon: tailwind,
              length: 90,
              name: 'TAILWIND',
              color: 'dark',
            })}
            {progressComp({
              icon: js,
              length: 85,
              name: 'Javascript',
              color: 'yellow',
            })}
             {progressComp({
              icon: ts,
              length: 20,
              name: 'Typescript',
              color: 'blue',
            })}
            {progressComp({
              icon: react,
              length: 90,
              name: 'React',
              color: 'gray',
            })}
            {progressComp({
              icon: mui,
              length: 70,
              name: 'Material UI',
              color: 'blue',
            })}
          </div>
        </div>
        <div className='flex-1 h-full relative' data-aos="fade-up" data-aos-offset="300">
          <h1 className='text-center p-4 text-blue-950 font-bold text-xl'>
            Backend Technologies{' '}
            <img
              src={arroww}
              alt=''
              className='absolute h-[120px] right-0 top-0'
            />
          </h1>

          <div className='w-full p-4'>
            {progressComp({
              icon: strapi,
              length: 90,
              name: 'STRAPI',
              color: 'blue',
            })}
            {progressComp({
              icon: firebase,
              length: 90,
              name: 'FIREBASE',
              color: 'yellow',
            })}
            {progressComp({
              icon: py,
              length: 40,
              name: 'PYTHON',
              color: 'blue',
            })}
          </div>
        </div>
        <div className='flex-1 h-full relative' data-aos="fade-up" data-aos-offset="400">
          <h1 className='text-center p-4 text-blue-950 font-bold text-xl'>
            Frameworks{' '}
            <img
              src={arroww}
              alt=''
              className='absolute h-[120px] right-0 top-0'
            />
          </h1>

          <div className='w-full p-4'>
            {progressComp({
              icon: tailwind,
              length: 90,
              name: 'TAILWIND',
              color: 'dark',
            })}
            {progressComp({
              icon: react,
              length: 90,
              name: 'React',
              color: 'gray',
            })}
            {progressComp({
              icon: mui,
              length: 70,
              name: 'Material UI',
              color: 'blue',
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
