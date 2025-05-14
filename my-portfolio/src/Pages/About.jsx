import Navbar from "../Components/Navbar";
import SkillGrid from "../Components/About/SkillGrid";
const About = () => {
    return (
        <div class="relative w-full min-h-screen bg-gradient-to-l from-slate-900 to-indigo-950 overflow-hidden">
            
            <div className="flex flex-col items-center pt-[10%]">
                <h1 className="text-cyan-400/70 text-7xl font-bold font-josefin mb-16">About</h1>
                
                <SkillGrid />
            </div>
            
        </div>
    )
}

export default About;