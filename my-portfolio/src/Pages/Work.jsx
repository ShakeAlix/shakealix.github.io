import Projects from "../Components/Project"

const Work = () => {
    return (
        <div class="relative w-full min-h-screen bg-gradient-to-l from-slate-900 to-indigo-950 overflow-hidden">
            
            <div className="flex flex-col items-center pt-[10%]">
                <h1 className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold font-josefin mb-16">
                    My Work
                </h1>

                <Projects />

                
            </div>


        </div>
    )
}

export default Work