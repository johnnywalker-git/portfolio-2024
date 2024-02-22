import { Icon } from '@iconify/react';
import { useState } from 'react';
import Icons from './Icons';
import profileImage from '../images/jw-circle.png'


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)

    const handleNav = (e: React.MouseEvent) => {
        e.preventDefault()
        setNavOpen((prev) => !prev)
        console.log("menu clicked", navOpen)
    }

    return(
        <div className="flex flex-col w-full bg-gradient-to-tr from-gray-900 to-gray-600 bg-gradient-to-r justify-between p-3 lg:w-1/3 lg:h-screen lg:place-content-around lg:fixed">
            <div className="hidden lg:flex align-center justify-center pt-3">
                <img src={profileImage} width={150} height={150} className='drop-shadow-md'	/>
            </div>
            <div className="lg:hidden flex w-full p-3 text-white flex lg:mb-5 justify-between md:justify-start sm:place-items-center">
                <img src={profileImage} width={50} height={50} className='lg:hidden'/>
                <h1 className='text-xl self-center md:ml-10 lg:hidden sm:text-mg font-title'>Portfolio | Johnathan Walker</h1>
                <a href="" className='flex sm:hidden self-center' onClick={(e) => {handleNav(e)}}>
                {!navOpen ? <Icon icon="ci:hamburger-md" style={{ fontSize: '42px' }} /> :
                <Icon icon="ph:x-fill" style={{ fontSize: '42px' }} />}
                </a>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:text-white lg:self-center lg:text-center">
                <h1 className='text-3xl font-title'>Johnathan Walker</h1>
                <h2 className='text-lg font-text ' >Software Developer</h2>
                <div className='flex flex-row justify-center items-center'>
                <Icon icon="carbon:location" color="white" />
                <h2 className='text-md px-1'>West Yorkshire</h2>
                </div>
            </div>
            <div className={`${navOpen ? "flex flex-col items-center h-48 justify-center font-text" : "hidden"}  font-text text-center text-white self-auto flex-col self-center md:flex md:flex-row lg:flex lg:flex-col`}>
            <a href="/home" className="border text-base px-2 m-1 hover:underline p-1 w-40 hover:bg-gray-600 md:border-0 lg:border">Home</a>
            <h3 className='hidden md:block lg:hidden self-center'> | </h3>
            <a href="/skills" className="border text-base px-2 m-1 hover:underline p-1 w-40 hover:bg-gray-600 md:border-0 lg:border">Skills</a>
            <h3 className='hidden md:block lg:hidden self-center'> | </h3>
            <a href="/projects" className="border text-base px-2 m-1 hover:underline p-1 w-40 hover:bg-gray-600 md:border-0 lg:border">Projects</a>
            <h3 className='hidden md:block lg:hidden self-center'> | </h3>
            <a href="#" className="border text-base px-2 m-1 hover:underline p-1 w-40 hover:bg-gray-600 md:border-0 lg:border">Contact</a>
            </div>
            <div className='hidden lg:flex lg:flex-col lg:self-auto lg:self-center lg:mb-10'>
                <Icons />
            </div> 
            <div className='hidden lg:flex self-center text-white text-xs'>
                <h5 className='font-text'>© Johnathan Walker</h5>
            </div>
        </div>
    )
}

export default Navbar;



