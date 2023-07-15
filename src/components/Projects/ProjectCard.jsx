import React from 'react'
import {FaGithub,FaGlobe} from "react-icons/fa";



const ProjectCard = ({title,des,src,href,Link}) => {
  return (
    <div className='w-full px-12 py-10 mt-10  h-auto  rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-800 transition-color duration-1000'>
      <div className='w-full h-[80%] overflow-hidden rounded-lg'>
        <img className='w-full h-60 object-cover group-hover:scale-110 duration-300 cursor' src={src} alt="src" />
        
      </div>
      <div className='w-full mt-5'>
        <div className='flex  gap-40'>
        <h3>
            {title}
        </h3>
        <div>
            <a href={href} className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-1000 cursor-pointer'>
                <FaGithub/>
            </a>
            {/* {""} */}
            <a href={Link} className='text-lg w-10 mt-2 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-1000 cursor-pointer'>
                <FaGlobe/>
            </a>
        </div>

        </div>
        <div>
            {des}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
