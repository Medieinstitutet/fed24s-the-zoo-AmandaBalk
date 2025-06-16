import { Navigation } from "./Navigation"

export const Header = ()=>{
    return (
        <header className="relative overflow-hidden h-56 sm:h-96 mb-8 shadow-md flex items-center justify-center">
            <img
                src="/header-img.jpg"
                alt="Header"
                className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
            />
            <div className="absolute top-0 left-0 w-full flex justify-center z-10">
                <Navigation />
            </div>
            <h1 className="relative mt-20 self-start ml-8 text-sm sm:text-6xl font-bold text-green-900 drop-shadow-lg bg-white/70 px-6 py-3 rounded">
                Djurens Digitalpark
            </h1>
        </header>
    );
}