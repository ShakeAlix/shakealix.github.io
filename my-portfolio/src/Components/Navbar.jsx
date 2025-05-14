import "../index.css"
const Navbar = () => {
    return (
        <div className="w-full h-14 bg-slate-900 bg-opacity-10 shadow-lg flex items-center justify-center">
            <div className="flex gap-12 text-white text-lg font-josefin">
                <div className="cursor-pointer">home</div>
                <div className="cursor-pointer">about</div>
                <div className="cursor-pointer">work</div>
                <div className="cursor-pointer">contact</div>
            </div>
        </div>

    )
}

export default Navbar;