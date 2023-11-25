import React from 'react'

const About = () => {
  return (
    <div className='bg-[#0a192f] w-full h-screen text-gray-300' name="about">
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-[2rem] '>
                    <p className='text-3xl font-bold border-b-4 border-pink-400'>About</p>
                </div>
                <div>

                </div>

            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-5 px-8'>
            <div className='sm:text-right text-2xl font-bold'>
               <h3>I'm a Frontend Developer expert in React.</h3> 
            </div>
            <div>
              <p>I am a computer science graduate with a relentless drive for
learning and advancement in the tech industry. My goal is to excel
as a Frontend Developer, and I bring a strong foundation in HTML,
CSS, JavaScript, and React to achieve this.
With a portfolio of more than 10 completed projects in HTML, CSS,
and JavaScript, I have not only acquired a comprehensive skill set
but also demonstrated my ability to deliver practical results.
Additionally, my one-month internship at Codsoft has provided me
with valuable real-world experience.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About