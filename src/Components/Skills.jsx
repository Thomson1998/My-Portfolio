import React from 'react'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import js from '../Assets/js.png'
import mongodb from '../Assets/mongodb.png'
import expressjs from '../Assets/expressjs.png'
import react from '../Assets/react.png'
import nodejs from '../Assets/nodejs.png'
import github from '../Assets/github.png'
import bootstrap from '../Assets/bootstrap.png'

const Skills = () => {

    const tech = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id:3,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id:4,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-indigo-500',
        },
        {
            id:5,
            src: react,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id:6,
            src: nodejs,
            title: 'NodeJS',
            style: 'shadow-green-500',
        },
        {
            id:7,
            src: expressjs,
            title: 'ExpressJS',
            style: 'shadow-blue-500',
        },
        {
            id:8,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-500',
        },
        {
            id:9,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400',
        },
    ]
  return (
    <div name='skills' 
    className='bg-gradient-to-b from-gray-800 to-black w-full h-screen p-6 pb-2'>


        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 pb-2 inline'>
                    Skills
                </p>
                <p className='py-6'>
                    Tech Stacks
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-4 px-8 sm:px-0'>


                {
                    tech.map(({id, src, title, style}) => (

                        <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt='' className='w-10 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>    

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills