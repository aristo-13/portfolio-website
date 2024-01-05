import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

function Form() {
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [message,setMessage] = useState("")
const [loading,setLoading] = useState(false)

const handleSubmit = (e) => {
 e.preventDefault()

 setLoading(true)
 const service_id = 'service_k8z5cue'
 const template_id = 'template_lytdb8f'
 const user_id = 'BiBMmvXe6nszLLK5P'

    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "Richmond Osei Mensah",
        message: message
    }

    emailjs.send(service_id, template_id, templateParams,user_id)
    .then(function(response) {
       setLoading(false)
       setEmail("")
       setName("")
       setMessage("")
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlfor="floating_text" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlfor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="w-full mx-auto">
            <label htmlfor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        </div>
        
        <button type="submit" className="text-white bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4 flex justify-center items-center gap-2">
          {loading && <div className='w-[20px] h-[20px] rounded-xl border-4 border-white border-dashed animate-spin'></div>}
            Send Message</button>
    </form>

  )
}

export default Form
