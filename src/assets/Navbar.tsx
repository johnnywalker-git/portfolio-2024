import { Icon } from '@iconify/react';
import { useState } from 'react';
import Icons from './Icons';


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)

    const handleNav = (e: React.MouseEvent) => {
        e.preventDefault()
        setNavOpen((prev) => !prev)
        console.log("menu clicked", navOpen)
    }

    return(
        <div className="flex flex-col w-full bg-gradient-to-tr from-gray-900 to-gray-600 bg-gradient-to-r justify-between p-3 lg:w-1/3 lg:h-screen lg:place-content-around">
            <div className="sm:flex w-full p-3 justify-between text-white flex lg:justify-center">
                <h1 className='self-center text-2xl md:text-xl lg:hidden'>Portfolio | Johnathan Walker</h1>
                <a href="" className='flex sm:hidden' onClick={(e) => {handleNav(e)}}>
                {!navOpen ? <Icon icon="ci:hamburger-md" style={{ fontSize: '42px' }} /> :
                <Icon icon="ph:x-fill" style={{ fontSize: '42px' }} />}
                </a>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:text-white lg:self-center lg:text-center">
                <h1 className='text-3xl'>Johnathan Walker</h1>
                <h2 className='text-lg ' >Software Developer</h2>
                <div className='flex flex-row justify-center items-center'>
                <Icon icon="carbon:location" color="white" />
                <h2 className='text-md px-1'>West Yorkshire</h2>
                </div>
            </div>
            <div className={`${navOpen ? "flex flex-col items-center h-48 justify-center" : "hidden"} text-center text-white self-auto flex-col self-center md:flex md:flex-row lg:flex lg:flex-col`}>
            <a href="#" className="px-2 m-1 hover:underline">Home</a>
            <a href="#" className="px-2 m-1 hover:underline">Skills</a>
            <a href="#" className="px-2 m-1 hover:underline">Projects</a>
            <a href="#" className="px-2 m-1 hover:underline">Contact</a>
            </div>
            <div className='hidden lg:flex lg:flex-col lg:self-auto lg:self-center'>
                <Icons />
            </div>
        </div>
    )
}

export default Navbar;



