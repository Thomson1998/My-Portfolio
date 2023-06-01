import React from 'react'
import about from '../Assets/about.png'

const About = () => {
  return (
    <div 
    name='about' 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                  About
                </p>
            </div>

            <p>
            <img src={about} alt='my logo' className='justify-center w-40 mx-auto' />
            </p>

            <br />

            <p className='text-2xl'>
            Hi, I'm a well-qualified full-stack developer specialising in the MERN stack and familiar with a wide range of programming utilities and languages. Knowledgeable of front-end and back-end development requirements with database management. Handles any part of the process with ease.
            </p>
            <br />
            <br />
            <br />
            <br />
        </div>
    </div>
    
  )
}

export default About
