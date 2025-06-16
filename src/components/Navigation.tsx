import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav className="w-full flex justify-center absolute top-0 left-0 z-20">
            <ul className="flex gap-6 bg-white/80 backdrop-blur px-6 py-2 mt-4 rounded-full shadow-md">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg font-semibold transition-colors duration-200
                            ${isActive ? "bg-green-600 text-white" : "text-green-900"}`
                        }
                    >
                        Hem
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/animals"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg font-semibold transition-colors duration-200
                            ${isActive ? "bg-green-600 text-white" : "text-green-900"}`
                        }
                    >
                        Våra djur
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}