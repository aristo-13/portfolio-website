import React from 'react'
import Form from '../components/Form'

function Contact() {
  return (
    <div id='contact' className='w-full p-4 md:p-8'>
      <p className='text-center p-10 text-3xl font-bold text-blue-950' data-aos="fade-in"><span className='text-sm text-gray-500 font-normal block'>Get in touch?</span> Contact</p>
       
       <Form />
    </div>
  )
}

export default Contact
