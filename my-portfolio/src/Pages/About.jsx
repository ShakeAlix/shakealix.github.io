import Navbar from "../Components/Navbar";
import SkillGrid from "../Components/About/SkillGrid";
const About = () => {
    return (
        <div class="relative w-full min-h-screen bg-gradient-to-l from-slate-900 to-indigo-950 overflow-hidden">
            
            <div className="flex flex-col items-center pt-[10%]">
                
                <h1 className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold font-josefin mb-16">About</h1>
                
                
                <p className="w-[1000px] mx-auto text-lg justify-start text-white text-center font-normal leading-loose font-josefin">
                    Throughout my academic journey, I have focused on various languages/frameworks. 
                    I have worked with the MERN stack to build full-stack web applications, 
                    using modern CSS practices and clean JS code. 
                    Still, I'm always ready to adapt to new tools and technologies as needed. 
                    I have deployed projects using platforms like Heroku and Vercel. 
                    I have used Python for my ML/DL courses. 
                    At the same time, C/C++ and Go-Lang have helped me understand systems-level programming and distributed computing. 
                    In addition, I am proficient in Figma for creating user-centered interfaces 
                    (I used it to make this website) and have experience in user research and product testing.
                </p>

                
                <div className="py-3">
                    <SkillGrid />
                </div>
            </div>
            
        </div>
    )
}

export default About;