
const Home = () => {
    return(
        <div className="ml-auto mt-auto flex flex-col lg:w-2/3 bg-white items-center min-h-screen">
        <div className="w-full flex flex-col bg-gray-900 h-40 lg:h-60 bg-custom justify-center items-center">
        <h2 className="text-white text-2xl m-3 bg-black bg-opacity-60 p-1 font-title">Portfolio</h2>
        <h3 className="text-white text-l text-center bg-black bg-opacity-60 p-1">Specialising in front-end web development. <br /> Skilled with JavaScript and associated frameworks.</h3>
        </div>
        <div className="w-11/12 flex flex-col justify-center text-slate-800">
            <h2 className="text-lg bg-gray-800 mt-5 p-2 text-white font-text pl-5">About me</h2>
            <div className="w-11/12 flex mt-2 text-justify p-4 items-center self-center bg-slate-300 border-l-4 border-slate-600 hover:ml-4 cursor-pointer">
            <div>
            <h3  className="font-bold">Who am I?</h3>
            <p>I am a young ambitious developer with a passion for using technology to solve real-world problems. </p>
            </div>
            </div>
            <div className="w-11/12 flex mt-2 text-justify p-4 items-center self-center bg-slate-300 border-l-4 border-slate-600 hover:ml-4 cursor-pointer">
            <div>
            <h3  className="font-bold">What can I bring?</h3>
            <p>My technical skills encompass a variety of different tools across the full-stack development life-cycle.</p>
            </div>
            </div>
            <div className="w-11/12 flex mt-2 justify-center text-justify p-4 items-center self-center bg-slate-300 border-l-4 border-slate-600 hover:ml-4 cursor-pointer">
            <div>
            <h3 className="font-bold">Why work with me?</h3>
            <p>I am a personable, logical thinking individual who is confident in communicating with peers, management and clients alike.</p>
            </div>
            </div>
        </div>

        <div className="w-11/12 flex flex-col justify-center text-slate-800">
            <h2 className="text-lg bg-gray-800 mt-5 p-2 text-white font-text pl-5">My journey</h2>
            <div className="w-11/12 flex mt-2 justify-center text-justify p-4 items-center self-center bg-slate-300 border-l-4 border-slate-600 hover:ml-4 cursor-pointer">
            <div>
            <h3 className="font-bold">NorthCoders - 2023</h3>
            <p>Seeking an opportunity to work and code with others, I decided to take leave from accountancy and study a full-time three month intensive bootcamp.</p>
            <br />
            <p>This course took my JavaScript fundamental skills and catapulted me into building full-stack applications with agile teams. It was a great opportunity to use my personal skills to develop an SQL web server using NodeJS and Express using TDD. I then hosted this as an API and built a user-friendly and accessible front-end.</p>
            <br />
            <p>The culmination of the course saw me working in an agile team to plan, scope for the right tools and build a working pro-type of a web application which can be seen here. I took away great team-working skills, and a better understanding of the full software development life-cycle.</p>
            </div>
            </div>
            <div className="w-11/12 flex mt-2 justify-center text-justify p-4 items-center self-center bg-slate-300 border-l-4 border-slate-600 hover:ml-4 cursor-pointer">
            <div>
            <h3 className="font-bold">Self study - 2022</h3>
            <p>My journey into software began in 2022, when I picked up my first self-learning materials online. From using things like The Odin Project to help me write my first ReadMe through to designing and building my first landing page with HTML & Vanilla CSS, I knew this path was right for me.</p>
            </div>
            </div>
            <div className="w-11/12 flex mt-2 justify-center text-justify p-4 items-center self-center bg-slate-300 mb-5 border-l-4 border-slate-600 hover:ml-4 cursor-pointer">
            <div>
            <h3 className="font-bold">Accountancy - 2012 - 2022</h3>
            <p>The bulk of my experience for communication and problems-solving comes from my accountancy career. (AAT Level 3.) I utilised my analytical mind-set and empathetic personality to solve a variety of clients tax problems. I implemented process improvements as I saw fit, and was always the go-to person in the office for any technical help.</p>
            </div>
            </div>
        </div>

        </div>
    )
}

export default Home