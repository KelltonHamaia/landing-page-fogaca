export const NavBar = () => {
    return (
        <nav className="h-16 bg-[#030B20] flex items-center text-white px-20">

            <div className="flex-1 ">
                <span className="font-bold text-xl font-serif">Logic Journey</span>
            </div>

            <ul className="flex-1 flex justify-end gap-5 text-xl">
                <li className="hover:text-blue-400 hover:cursor-pointer">Início</li>
                <li className="hover:text-blue-400 hover:cursor-pointer">Objetivos</li>
                <li className="hover:text-blue-400 hover:cursor-pointer">História</li>
                <li className="hover:text-blue-400 hover:cursor-pointer">Login</li>
            </ul>
        </nav>
    )
}