import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'

const Icons = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
            </>
            ),
            href: 'https://www.linkedin.com/in/contactthomson/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                GitHub <FaGithub size={30} />
            </>
            ),
            href: 'https://github.com/Thomson1998',
        },
        {
            id:3,
            child: (
                <>
                Mail <HiOutlineMail size={30} />
            </>
            ),
            href: 'mailto:jackzthomson2@gmail.com',
        },
        {
            id:4,
            child: (
                <>
                WhatsApp <ImWhatsapp size={30} />
            </>
            ),
            href: 'https://api.whatsapp.com/send?phone=919940591757',
        },
        {
            id:5,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
            </>
            ),
            href: 'https://drive.google.com/file/d/1QRtIZMIRGZ0IyxcNydK4toCS1xHmFI4F/view?usp=drive_link',
            style: 'rounded-br-md',
            download: 'true',
        }
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({id, child, href, style, download}) =>(
                     <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 + ' ' + ${style}`}>
                     <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel='noopener noreferrer'>
                       {child}
                     </a>
                     </li>
                ))}
            </ul>
        </div>
    )
}

export default Icons