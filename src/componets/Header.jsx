import { Link } from "react-router-dom";
import { MoonIcon, SunDimIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function Header({ transparent = false }) {
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
    <header
      className={`${
        transparent ? "bg-transparent !bg-none" : "bg-light-purple dark:bg-dark-mode-purple"
      } h-20 px-6 flex flex-col`}
    >
      <div className="flex items-center justify-between w-full h-full">

        <div className="text-dark-purple font-poppins  font-semibold text-4xl dark:text-light-mode-purple">
          <Link to="/">AlzhCare</Link>
        </div>

        <div className="flex items-center gap-5">
          <nav className="flex gap-8 text-dark-purple text-xl font-poppins font-medium dark:text-light-mode-purple">
            <Link to="/produto">O produto</Link>
            <Link to="/guiainstrucao">Guia</Link>
            <Link to="/quemSomos">Quem somos</Link>
            <Link to="/jogo">Jogo</Link>
          </nav>

          <button
            className={`relative w-14 h-8 bg-purple-700 rounded-full p-1 flex items-center transition-all focus:outline-none cursor-pointer ${
              theme === "dark" ? "justify-end" : "justify-start"
            }`}
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

      <div className="w-full h-[1px] bg-dark-purple dark:bg-light-purple -mt-2"></div>
    </header>
  );
}




