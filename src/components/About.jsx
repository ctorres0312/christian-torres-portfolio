import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#80D1FF]'>
                About
                </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold '>
                <p>Hi. I'm Christian, nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p>I'm a creative and dedicated individual with a deep passion for technology and design. As a Front-End Web Developer, I specialize in bringing digital visions to life, crafting visually stunning and user-friendly websites. With a strong command of HTML, CSS,JavaScript, and React, I thrive on the ever-evolving challenges of web development. I'm committed to staying at the forefront of industry trends to deliver exceptional online experiences.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
