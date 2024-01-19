import { Icon } from '@iconify/react';

    interface IconsProps {
        color? : string;
        size?: number;
    }


const Icons: React.FC<IconsProps> = ({color = 'white', size = 42}) => {

return (
    <div className='flex self-auto self-center justify-center'>
    <a href="" className='p-2'><Icon icon="uil:github" color={color} width={`${size - 3}`} height={`${size - 3}`}/></a>
    <a href="" className='p-2'><Icon icon="mdi:linkedin" color={color} width={`${size}`} height={`${size}`}/></a>
    <a href="" className='p-2'><Icon icon="ic:round-email" color={color} width={`${size}`} height={`${size}`}/></a>            
    </div>
)
}


export default Icons