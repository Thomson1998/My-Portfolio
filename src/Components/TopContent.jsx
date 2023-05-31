import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'
import { TbArrowRightTail } from 'react-icons/tb'
import { TbDownload } from 'react-icons/tb'
import { Link } from 'react-scroll'

const TopContent = () => {

const profile = [
    {
        id:1,
        link: 'https://www.linkedin.com/in/contactthomson/',
        icon: <FaLinkedin />
    },
    {
        id:2,
        link: 'https://github.com/Thomson1998',
        icon: <FaGithub />
    },
    {
        id:3,
        link: 'mailto:jackzthomson2@gmail.com',
        icon: <HiOutlineMail />
    },
    {
        id:4,
        link: 'https://api.whatsapp.com/send?phone=919940591757',
        icon: <ImWhatsapp />
    },
]
  return (
    <div name='home' className='min-h-screen flex flex-col justify-center items-center p-5 text-center bg-gradient-to-b from-black via-black to-gray-800'>
        <h2 className='text-4xl sm:text-7xl font-bold text-white'>THOMSON</h2>
        <h3 className='text-2xl sm:text-3xl font-bold text-white py-6 max-w-md'>Full Stack Developer</h3>

        <a href="/THOMSON_RESUME.pdf" download='true' className=' text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110'>
            Resume
            <span> <TbDownload /> </span>
        </a>


        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
            {profile.map(({id, link, icon}) => (
                <a href={link} key={id} target='_blank' rel='noopener noreferrer'
                className='cursor-pointer text-white duration-300 hover:text-blue-500 hover:scale-125'>{icon}
                    </a>
            ))}
        </div>
        <div>
            <Link 
            to='contact' 
            smooth 
            duration={500} 
            className='group text-white w-fit px-6 py-3 my-2 flex items-start cursor-pointer hover:scale-125'
            >
              <span className='group-hover:rotate-90 duration-300'>
                <TbArrowRightTail size={20} className='ml-1'/>
              </span>
            </Link>
          </div>
    </div>
  )
}

export default TopContent