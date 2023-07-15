import React from 'react'
import ProjectCard from './ProjectCard'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'

const Projects = () => {
  return (
    <section 
    id='projects'
    className='w-full py-20  border-b-[1px] border-b-black'
    >
    <div className='flex justify-center items-center text-center'>
    <div className='flex flex-col gap-4 font-titleFont'>
        <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>
           Visit My Portfolio And Keep Your Feedback
        </h3>
        <h1 className='text-5xl text-gray-300 font-bold capitalize'>
         My Projects
        </h1>
      
    </div>
    </div>
    <div className=' grid grid-cols-3 gap-20 ' >
        <ProjectCard
        title="Random Website"
        des="This is a frontend webpage which is made to show the implementation of HTML, CSS" 
        src={image1}
        href="https://github.com/Nilesh911/RandomWebsite"
        link="random-website-rho.vercel.app"
        />
        <ProjectCard
        title="E-commerce Website"
        des="Online Clothing Store made using ReactJS." 
        src={image2}
        href="https://github.com/Nilesh911/Q-mart"
        />
        <ProjectCard
        title="Portfolio Website"
        des="My Portfolio which is made using ReactJS. It displays my skills and the projects I've worked on." 
        src={image3}
        href="https://github.com/Nilesh911/PortfolioWebSite"
        href2=""
        />
        <ProjectCard
        title="MockTrail Website"
        des="Project used to implement my skills in MERN stack development. This is a Ticket Booking App that enables us to book tickets and recieve them through emails." 
        src={image4}
        href="https://github.com/Nilesh911/Mock-trail"
        />

    </div>
    <div className='flex justify-center items-center text-center hover:text-designColor duration-1000 cursor-pointer'>
        <h2 className=''>
        E-mail:phadatarenilesh1@gmail.com
        </h2>
        /
        <span className=''>
            Phone No:9324102132
        </span>
    </div>
    </section>
  )
}

export default Projects
