import { Link } from "react-router-dom";
import { MoonIcon, SunDimIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { GameControllerIcon, BookIcon, BackpackIcon, UsersIcon, ListIcon } from "@phosphor-icons/react";


export function SideMenu({ onClose }) {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const tagHTML = document.documentElement;
        tagHTML.classList.remove("dark");
        if (theme === "dark") {
            tagHTML.classList.add("dark");
        }
    }, [theme]);

    return (
        <div className="bg-[var(--color-white)] dark:bg-[var(--color-dark-mode-purple)] w-[280px] h-full p-4 rounded-r-3xl flex flex-col shadow-lg">
            <div className="flex flex-col">
                <div className="flex flex-row [color:var(--color-dark-purple)] dark:[color:var(--color-white)] justify-around items-center mb-3">
                    <div>
                        <ListIcon size={32} className="text-dark-purple dark:text-white" />
                    </div>
                    <div>
                        <Link className="text-4xl font-bold p-4">AlzhCare</Link>
                    </div>
                </div>
                <div>
                    <hr className=" [color:var(--color-dark-purple)] border-b-1 dark:[color:var(--color-white)]"/>
                </div>
            </div>

            <ul className="flex flex-col gap-5 mt-20 flex-1">
                <li className="pl-4 grid grid-cols-[auto_1fr] gap-5 items-center">
                    <GameControllerIcon size={30} className="text-dark-purple dark:text-white" />
                    <Link to="/jogo" className="block text-2xl [color:var(--color-dark-purple)] font-medium dark:[color:var(--color-white)]" onClick={onClose}>Jogo </Link>
                </li>
                <li className="pl-4 grid grid-cols-[auto_1fr] gap-5 items-center">
                    <BookIcon size={30} className="text-dark-purple dark:text-white" />
                    <Link to="/guiainstrucao" className="block text-2xl [color:var(--color-dark-purple)] font-medium dark:[color:var(--color-white)]" onClick={onClose}>Guia</Link>
                </li>
                <li className="pl-4 grid grid-cols-[auto_1fr] gap-5 items-center">
                    <BackpackIcon size={30} className="text-dark-purple dark:text-white " />
                    <Link to="/produto" className="block text-2xl [color:var(--color-dark-purple)] font-medium dark:[color:var(--color-white)]" onClick={onClose}>O produto</Link>
                </li>
                <li className="pl-4 grid grid-cols-[auto_1fr] gap-5 items-center">
                    <UsersIcon size={30} className="text-dark-purple dark:text-white" />
                    <Link to="/quemsomos" className="block text-2xl [color:var(--color-dark-purple)] font-medium dark:[color:var(--color-white)]" onClick={onClose}>
                        Quem somos
                    </Link>
                </li>
            </ul>

            <div className="flex flex-col justify-end items-center mb-8">
                <button
                    className={`relative w-14 h-8 bg-purple-700 rounded-full p-1 flex items-center transition-all focus:outline-none cursor-pointer ${theme === "dark" ? "justify-end" : "justify-start"}`}
                    onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
                >
                    {theme === "dark" ? (
                        <SunDimIcon size={24} className="text-yellow" />
                    ) : (
                        <MoonIcon size={24} className="text-yellow" />
                    )}
                </button>
            </div>
        </div>
    )


}
