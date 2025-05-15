import "../index.css"
const Navbar = () => {
    return (
        <div className="w-full h-14 bg-slate-900 bg-opacity-10 shadow-lg fixed top-0 z-50 flex justify-between items-center backdrop-blur-sm">
            <div className="flex items-center pl-6">
                <img src="../../logo1.svg" className="opacity-50 h-6"/>
            </div>
            
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="flex gap-12 text-white text-lg font-josefin">
                    <a href="#home" className="cursor-pointer hover:underline">home</a>
                    <a href="#about" className="cursor-pointer hover:underline">about</a>
                    <a href="#work" className="cursor-pointer hover:underline">work</a>
                    <a href="#contact" className="cursor-pointer hover:underline">contact</a>
                </div>
            </div>
        </div>
    )
}


export default Navbar;