import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import RJ from '../assets/react.png'
import GH from '../assets/github.png'
import NJS from '../assets/node.png'
import JS from '../assets/javascript.png'
import AWS from '../assets/aws.png'
const Skills = () => {
  return (
    <div className=' w-full h-screen bg-[#0a192f] text-gray-300' name='skills'>
        <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col'>
            <div className='px-2'>
                    <p className='text-3xl font-bold border-b-4 border-pink-400 inline'>Experience</p>
                    <p className='py-4 '>These are the Technologies i have worked with:</p>
            </div>
            

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={HTML} alt="HTMLSkill" 
                    className='w-20 mx-auto '
                    />
                    <p className='py-4'>HTML</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={CSS} alt="HTMLSkill" 
                    className='w-20 mx-auto '
                    />
                    <p className='py-4'>CSS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={JS} alt="HTMLSkill" 
                    className='w-20 mx-auto '
                    />
                    <p className='py-4'>Javascript</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={RJ} alt="HTMLSkill" 
                    className='w-20 mx-auto '
                    />
                    <p className='py-4'>React JS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={NJS} alt="HTMLSkill" 
                    className='w-20 mx-auto '
                    />
                    <p className='py-4'>Node JS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={GH} alt="HTMLSkill" 
                    className='w-20 mx-auto '
                    />
                    <p className='py-4'>GITHUB</p>
                  </div>
                 
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={AWS} alt="HTMLSkill" 
                    className='w-20 mx-auto '
                    />
                    <p className='py-4'>AWS</p>
                  </div>
              
            </div>
        </div>
    </div>
  )
}

export default Skills