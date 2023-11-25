import React from 'react'
import { useState } from 'react'
import { FaBars, FaLinkedin, FaMailBulk, FaPersonBooth } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineClose,MdOutlineMailOutline  } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll';
import Logo from '../assets/logo2.png'
import resume from '../assets/RajaUmarResume.pdf'

const Navbar = () => {
     const [nav, setNav] = useState(false)

     const hanleClick = ()=> setNav(!nav)
  return (
    <>
    <div className=' fixed bg-[#0a192f] text-gray-300 flex items-center justify-between px-5 mx-auto w-full h-[50px]'>
    <Link 
      
      to="home" 
      smooth={true} 
      duration={500} 
      onClick={hanleClick}
      
    >
      <img src={Logo} alt="LogoImg" className='w-[35%] cursor-pointer' />
    </Link>
        

        <ul className='hidden md:flex gap-10 '>
            <li className='text-s cursor-pointer hover:text-white  hover:font-normal '  >
            <Link 
      
      to="home" 
      smooth={true} 
      duration={500} 
     
    >
      Home
    </Link>
            </li>
            <li className='text-s cursor-pointer hover:text-white  hover:font-normal  ' >
            <Link 
      
      to="about" 
      smooth={true} 
      duration={500} 
      
    >
      About
    </Link>
            </li>
            <li className='text-s cursor-pointer hover:text-white  hover:font-normal  ' >    <Link 
    
      to="skills" 
      smooth={true} 
      duration={500} 
      
    >
      Skills
    </Link></li>
            <li className='text-s cursor-pointer hover:text-white  hover:font-normal  ' >
            <Link 
      
      to="work" 
      smooth={true} 
      duration={500} 
      
    >
      Portfolio
    </Link>
            </li>
            <li className='text-s cursor-pointer hover:text-white  hover:font-normal  ' >
            <Link 
    
      to="contact" 
      smooth={true} 
      duration={500} 
      
    >
      Contact
    </Link>
            </li>
        </ul>

        <ul className={!nav ? 'hidden' : 'absolute flex flex-col gap-7 top-0 left-0 items-center justify-center bg-[#0a192f] w-full h-[100vh] md:hidden '}>
            <li className='text-4xl cursor-pointer hover:text-white  '  >
            <Link 
      
      to="home" 
      smooth={true} 
      duration={500} 
      onClick={hanleClick}
      
    >
      Home
    </Link>
            </li>
            <li className='text-4xl cursor-pointer hover:text-white  ' >
            <Link 
      
      to="about" 
      smooth={true} 
      duration={500} 
      onClick={hanleClick}
      
    >
      About
    </Link>
            </li>
            <li className='text-4xl cursor-pointer hover:text-white  ' >
            <Link 
      
      to="skills" 
      smooth={true} 
      duration={500} 
      onClick={hanleClick}
      
    >
      Skills
    </Link>
            </li>
            <li className='text-4xl cursor-pointer hover:text-white  ' >
            <Link 
      
      to="work" 
      smooth={true} 
      duration={500} 
      onClick={hanleClick}
      
    >
      Portfolio
    </Link>
            </li>
            <li className='text-4xl cursor-pointer hover:text-white  ' > <Link 
      
      to="contact" 
      smooth={true} 
      duration={500} 
      onClick={hanleClick}
      
    >
      Contact
    </Link>
    </li>
        </ul>
         

          
  <div className='block z-10 md:hidden' onClick={hanleClick}>

  {!nav ? <FaBars /> :<MdOutlineClose />
}


  </div>



    </div>

    <div className='hidden lg:flex absolute fiexd flex-col top-[40%] left-0  text-black' >
    <ul>
        <li className='w-[160px] bg-blue-600 h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300'  >
            <a href="https://www.linkedin.com/in/rajaumarwebdeveloper?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " className='flex items-center justify-between w-full px-4'>Linkdein
             <FaLinkedin />
                           
            </a>
        </li>
       
        <li className='w-[160px] bg-[#333333] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300'  >
            <a href="https://github.com/umushtaqgmail" className='flex items-center justify-between w-full px-4'> Github
            <FaGithub/>
            </a>
        </li>

        <li className='w-[160px] bg-[#6fc2b0] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300'  >
            <a href="mailto:umushtaq159@gmail.com" className='flex items-center justify-between w-full px-4'>Email
            <MdOutlineMailOutline />

            </a>
        </li>

        <li className='w-[160px] bg-blue-500 h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300'  >
            <a href={resume} download='Raja Umar Resume' className='flex items-center justify-between w-full px-4'>
              Resume<BsFillPersonLinesFill />

            </a>
        </li>
    </ul>
</div>
</>
  )
}

export default Navbar