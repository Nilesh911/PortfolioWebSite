import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className='w-full h-24 mx-auto flex justify-between items-center border-b-[1px] border-b-gray-600'>
      <div>
       <img src={logo} alt='logo' className='h-20'/>
      </div>
      <div>
        <ul className='flex items-center gap-10'>
            <li className='cursor-pointer text-gray-300 hover:text-designColor duration-200'>
                Home
            </li>
            <li className='cursor-pointer text-gray-300 hover:text-designColor duration-200'>
                Project
            </li>
            <li className='cursor-pointer text-gray-300 hover:text-designColor duration-200'>
                Resume
            </li>
            <li className='cursor-pointer text-gray-300 hover:text-designColor duration-200'>
                About Me
            </li>
            <li className='cursor-pointer text-gray-300 hover:text-designColor duration-200'>
                Contact
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
