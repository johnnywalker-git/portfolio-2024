
import { Icon } from '@iconify/react';


const Skills = () => {
    return(
        <div className="ml-auto mt-auto flex flex-col lg:w-2/3 bg-white items-center min-h-screen">
        <div className="w-full flex flex-col bg-gray-900 h-40 lg:h-60 bg-custom-1 justify-center items-center">
        <h2 className="text-white text-2xl m-3 bg-gray-800 bg-opacity-60 p-1 font-title">Skills</h2>
        <h3 className="text-white text-l text-center bg-black bg-opacity-60 p-1 font-text">I am always scoping for new things to learn <br /> be it technologies or people skills!</h3>
        </div>
        <div className="w-11/12 flex flex-col justify-center font-text">
            <h2 className="text-lg bg-gray-800 mt-5 p-2 text-white font-text pl-5">Main tools</h2>
            <div className="w-11/12 flex mt-5 justify-center text-justify p-4 items-center self-center">
                <p>
                    These are the main tools and technologies I have honed my skills in so far...
                </p>
                </div>
                <div className="skillset grid grid-cols-3 sm:grid-cols-4 gap-2">
                    <div className='flex flex-col items-center'>
                    <Icon icon="logos:html-5" height={'60px'}/>
                    <h5 className='text-gray-800'>HTML 5</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="logos:css-3" width="60" height="60" />
                    <h5 className='text-gray-800'>CSS 3</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="vscode-icons:file-type-js-official" width="60" height="60" />
                    <h5 className='text-gray-800'>JavaScript</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="skill-icons:git" width="60" height="60" />
                    <h5 className='text-gray-800'>GIT</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="eva:github-fill" color="purple" width="60" height="60" />
                    <h5 className='text-gray-800'>Github</h5>   
                    </div>                 
                    <div className='flex flex-col items-center'>
                    <Icon icon="skill-icons:react-dark" color="purple" width="60" height="60" />
                    <h5 className='text-gray-800'>React</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="skill-icons:postgresql-light" color="purple" width="60" height="60" />
                    <h5 className='text-gray-800'>PostgreSQL</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="skill-icons:jest" color="purple" width="60" height="60" />
                    <h5 className='text-gray-800'>Jest</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="vscode-icons:file-type-node" color="green" width="60" height="60" />
                    <h5 className='text-gray-800'>NodeJS</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="skill-icons:supabase-dark" color="green" width="60" height="60" />
                    <h5 className='text-gray-800'>Supabase</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="logos:firebase" color="green" width="60" height="60" />
                    <h5 className='text-gray-800'>Firebase</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="vscode-icons:file-type-cypress" color="green" width="60" height="60" />
                    <h5 className='text-gray-800'>Cypress</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="skill-icons:tailwindcss-dark" color="green" width="60" height="60" />
                    <h5 className='text-gray-800'>Tailwind</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="logos:bootstrap" color="green" width="60" height="60" />
                    <h5 className='text-gray-800'>Bootstrap</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Icon icon="teenyicons:nextjs-outline" color="" width="60" height="60" />
                    <h5 className='text-gray-800'>NextJS</h5>
                    </div>
                </div>
                <div className='text-lg bg-gray-800 mt-5 p-2 text-white pl-5'>
                    <h2>Other skills</h2>
                </div>
                <div className="skills-container flex flex-wrap gap-1 mt-2 max-w-full">
                    <p className='flex text-xs items-center text-white bg-blue-grey-500 m-1 px-2 rounded'><Icon icon="mdi:tag" color="white" className='m-1'/>Team-working</p>
                    <p className='flex text-xs items-center text-white bg-blue-grey-500 m-1 px-2 rounded'><Icon icon="mdi:tag" color="white" className='m-1'/>Confidence</p>
                    <p className='flex text-xs items-center text-white bg-blue-grey-500 m-1 px-2 rounded'><Icon icon="mdi:tag" color="white" className='m-1'/>Effective communication</p>
                    <p className='flex text-xs items-center text-white bg-blue-grey-500 m-1 px-2 rounded'><Icon icon="mdi:tag" color="white" className='m-1'/>Empathy</p>
                    <p className='flex text-xs items-center text-white bg-blue-grey-500 m-1 px-2 rounded'><Icon icon="mdi:tag" color="white" className='m-1'/>Responsibility</p>
                    <p className='flex text-xs items-center text-white bg-blue-grey-500 m-1 px-2 rounded'><Icon icon="mdi:tag" color="white" className='m-1'/>Efficiency</p>
                    <p className='flex text-xs items-center text-white bg-blue-grey-500 m-1 px-2 rounded'><Icon icon="mdi:tag" color="white" className='m-1'/>Assertiveness</p>
                    <p className='flex text-xs items-center text-white bg-blue-grey-500 m-1 px-2 rounded'><Icon icon="mdi:tag" color="white" className='m-1'/>Proactive</p>
                    <p className='flex text-xs items-center text-white bg-blue-grey-500 m-1 px-2 rounded'><Icon icon="mdi:tag" color="white" className='m-1'/>Honesty</p>
                    <p className='flex text-xs items-center text-white bg-blue-grey-500 m-1 px-2 rounded'><Icon icon="mdi:tag" color="white" className='m-1'/>Detail-oriented</p>
                </div>
        </div>

      

        </div>
    )
}

export default Skills