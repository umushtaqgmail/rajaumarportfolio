import React from 'react'
import {FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-[100vh]  ' >

      <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center">
       <p className='text-pink-600'>Hi, I'm </p>
       <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6] '>Raja Umar</h1>
       <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
       <p className='text-[#8892b0] py-4 max-w-[700px] text-l '>I am a computer science graduate with a relentless drive for
learning and advancement in the tech industry. My goal is to excel
as a Frontend Developer, and I bring a strong foundation in HTML,
CSS, JavaScript, and React to achieve this.</p>
       <div>
        <button className='text-white group border-2 my-2 hover:bg-pink-600 duration-300 hover:border-pink-600 py-3 px-6 flex items-center gap-3 justify-center '>
        <a href="">
            <Link 
            
      
      to="work" 
      smooth={true} 
      duration={500} 
      
    >
      View Work
    </Link>
            </a>
          <span> < FaLongArrowAltRight className='text-xs group-hover:rotate-90 duration-300' /></span>
    
        </button>
       </div>
      </div>
    </div>
  )
}

export default Home