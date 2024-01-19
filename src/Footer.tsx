import Icons from "./assets/Icons"
import { Icon } from '@iconify/react';


interface FooterProps {
    color?:string
    size?: number
}

const Footer: React.FC<FooterProps> = ({color = 'white', size = 42 }) => {
    return(
        <div className="flex justify-center">
            <div className="flex flex-row justify-center items-center text-white w-1/3">
            <h2 className='text-xs px-1'>© Johnathan Walker 2024</h2>
            </div>
            <div className="w-1/3">
            <Icons color={color} size={size}/>
            </div>
            <div className="flex flex-row justify-center items-center text-white w-1/3">
            <Icon icon="carbon:location" color="white" />
            <h2 className='text-xs px-1'>West Yorkshire</h2>
            </div>
            
        </div>
    )
}

export default Footer