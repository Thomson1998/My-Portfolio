import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'
import { BsMouseFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Contact = () => {
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
    <div name='contact' 
    className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-6 text-white pb-2'>


      <div className='flex flex-col p-6 pb-2 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-2'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
            Contact
          </p>
          <p className='py-6'>
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/f1bb3c85-500f-45e9-b0ae-a0b503faa62f' 
            method='POST' 
            className='flex flex-col w-full md:w-1/2'>
              <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
              <input type='text' name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
              <textarea name="message" placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

              <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
            </form>
            <div className='flex flex-col gap-4 justify-center items-center pl-4 py-8 lg:py-16 text-3xl w-full md:w-1/3'>
            {profile.map(({id, link, icon}) => (
                <a href={link} key={id} target='_blank' rel='noopener noreferrer'
                className='cursor-pointer text-white duration-300 hover:text-blue-500 hover:scale-125'>{icon}
                    </a>
            ))}
        </div>
        </div>
        <Link to='home' smooth duration={500}>
        <BsMouseFill size={30} className='hidden sm:flex flex-col top-[90%] right-8 fixed cursor-pointer animate-bounce' />
        </Link>
      </div>
    </div>
  )
}

export default Contact