import Navbar from "../Components/Navbar";

const Home = () => {
    return (
    <>

        <div className="relative w-full min-h-screen bg-gradient-to-r from-indigo-950 via-indigo-950 to-slate-600/80 overflow-hidden">
            
            <Navbar /> 

            {/* Purple blurred blob */}
            <div className="absolute w-[800px] h-[800px] bg-fuchsia-700/60 blur-[150px] rotate-[-10deg] top-[100px] left-[300px] z-0" />

            {/* Your content */}
            <div className="relative z-10 text-white font-josefin px-10 pt-20">
                <h1 className="text-7xl font-bold">Hi, I'm Shahzaib</h1>
                <h2 className="text-5xl font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">Full-Stack Developer</h2>
                <p className="max-w-xl mt-6 text-lg leading-loose">
                    I am a computer science major at LUMS with a passion for using technology to create meaningful social impact. 
                    I've explored a wide range of topics—from machine learning and deep learning to distributed systems and full-stack development. 
                    My work has focused on designing with people in mind, as you'll see from my projects. 
                    However, I'm always looking for ways to combine technical skills with 
                    empathy to build tools that solve real-world problems and make lives better.
                </p>
            </div>

            <img className="absolute top-[50%] right-[13%] transform -translate-y-1/2 w-80 h-80 rounded-full object-cover" src="../public/dp.jpg" />

            <div class="absolute left-[2.5%] top-[70%] w-24 h-8 p-2.5 bg-gradient-to-l from-cyan-400/50 via-indigo-400/50 to-fuchsia-600/50 rounded-2xl inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <div class="text-center justify-center text-white text-base font-normal font-['Josefin_Sans'] leading-tight">Contact</div>
            </div>
        </div>
    </>

    )
}

export default Home;