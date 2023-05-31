import React from 'react'
import todolist from '../Assets/Projects/todolist.png'
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'
import shoppingcart from '../Assets/Projects/shoppingcart.png'

const Projectss = () => {

    const projs = [
        {
            id: 1,
            image: todolist,
            title: 'To-Do-List',
            github: 'https://github.com/Thomson1998/To-Do-List-FS-MERN-FE',
            demo: 'https://to-do-list-fs-mern.netlify.app/',
        },
        {
            id: 2,
            image: shoppingcart,
            title: 'Mobile-Cart',
            github: 'https://github.com/Thomson1998/Shopping-cart',
            demo: 'https://effortless-halva-462e86.netlify.app/',
        },
        {
            id: 3,
            image: todolist,
            title: 'To-Do-List',
            github: 'https://github.com/Thomson1998/To-Do-List-FS-MERN-FE',
            demo: 'https://to-do-list-fs-mern.netlify.app/',
        },
    ]
  return (
    <div name='projects' 
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Projects
                </p>
                <p className='py-6'>check out some of my work right here</p>
            </div>

            <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>

            { 
            projs.map(({id, image, title, github, demo}) => (
                <div key={id} className='max-w-lg flex shadow-md shadow-gray-300 rounded-2xl overflow-hidden'>
                    <img 
                    src={image} 
                    alt={title} className='w-2/3 rounded-md duration-200 hover:scale-105 ' />
                    <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                        <h2 className='font-bold'>{title}</h2>
                        <a className='text-2xl cursor-pointer duration-150 hover:scale-125' href={github} target='_blank' rel='noopener noreferrer' > <FaGithub />  </a>
                        <a className='text-2xl cursor-pointer duration-150 hover:scale-125' href={demo} target='_blank' rel='noopener noreferrer' > <FaExternalLinkSquareAlt />  </a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Projectss