import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Portfolio from './pages/Portfolio'
import { ArrowUpwardRounded } from '@mui/icons-material'
import bg from '../src/assets/Trianglify-10s-1280px.png'
import Contact from './pages/Contact'

function App() {
const [scrollUp,setScrollUp] = useState(false)


  useEffect(()=>{
    AOS.init({duration: 1000})
 },[])
 

 window.onscroll = () => {
  if(window.scrollY > 2){
    setScrollUp(true)
  }else{
    setScrollUp(false)
  }
 }


  return (
    <div className=' overflow-x-hidden'>
      <div style={{backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <Header />
        <Home />
      </div>
        <About />
        <Skill />
        <Portfolio />
        <Contact />

      {scrollUp && <div className='w-full fixed z-10 bottom-0 p-8 flex justify-end' data-aos="fade-up">
        <a href="#Home" className=' bg-gradient-to-b from-violet-600 via-violet-500 to-violet-300 border-voilet-600 shadow-violet-500 p-2 rounded-xl text-white'><ArrowUpwardRounded /></a>
      </div>}
    </div>
  )
}

export default App
