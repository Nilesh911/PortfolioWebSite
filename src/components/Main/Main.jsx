import React from 'react'
import { useTypewriter } from "react-simple-typewriter";
import {FaLinkedinIn,FaReact,FaTwitter,FaInstagram,FaGithub} from "react-icons/fa";
import {SiTailwindcss,SiCss3,SiHtml5,} from "react-icons/si";
import {Link} from "react-router-dom"

import Me from "../../../../frontend/src/assets/Me.png"


const Main = () => {
    const [text] = useTypewriter({
        words: ["MERN Stack Developer.", "UI Designer."], 
        loop: true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000,
    });
  return (
    <section className='w-full  py-20 flex items-center boader-b-[1px] font-titleFont border-b-black'>
     <div className='w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-3'>
            <h4 className='text-lg font-normal'>
             WELCOME
            </h4>
            <h1 className="text-6xl font-bold text-white">
                Hi, I'm {" "}
                <span className='text-designColor capitalize'> Nilesh Phadtare</span>
            </h1>
            <h2 className='text-4xl font-bold text-white'>
                a <span>{text}</span>
            </h2>
        </div>
        <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>
             Find me in 
            </h2>
            <div className='flex gap-4'>
                <a href="https://www.linkedin.com/in/nilesh-phadatare-b761ab256/" className='w-16 h-14 pt-2 bg-black bg-opacity-25 text-gray-200 text-4xl inline-flex
        item-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300 pt-20;'>
                     <FaLinkedinIn/>
                </a>
                <a href="https://github.com/Nilesh911" className='w-16 h-14 pt-2 bg-black bg-opacity-25 text-gray-200 text-4xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;'>
                     <FaGithub
                    
                     />
                </a>
                <a  className='w-16 h-14 pt-2 bg-black bg-opacity-25 text-gray-200 text-4xl inline-flex
        item-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;'>
                     <FaInstagram/>
                </a>
                <a className='w-16 h-14 pt-2 bg-black bg-opacity-25 text-gray-200 text-4xl inline-flex
        item-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;'>
                     <FaTwitter/>
                </a>
            </div>
        </div>
     <div>
     <h2 className='text-base uppercase font-titleFont mb-4'>
             Best Skill On 
            </h2>
            <div className='flex gap-4'>
                <span className='w-16 h-14 pt-2 bg-black bg-opacity-25 text-gray-200 text-4xl inline-flex
        item-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300 pt-20;'>
                     <FaReact/>
                </span>
                <span className='w-16 h-14 pt-2 bg-black bg-opacity-25 text-gray-200 text-4xl inline-flex
        item-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;'>
                     <SiCss3/>
                </span>
                <span className='w-16 h-14 pt-2 bg-black bg-opacity-25 text-gray-200 text-4xl inline-flex
        item-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;'>
                     <SiHtml5/>
                </span>
                <span className='w-16 h-14 pt-2 bg-black bg-opacity-25 text-gray-200 text-4xl inline-flex
        item-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;'>
                     <SiTailwindcss/>
                </span>
            </div>
     </div>
     </div>
     <div className='w-1/2'>
        <img src={Me} alt="Me" />
     </div>
    </section>
  )
}

export default Main
