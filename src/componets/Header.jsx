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
    <div>
      <div
        className={`${
          transparent ? "bg-transparent !bg-none" : "bg-light-purple dark:bg-dark-mode-purple"
        } h-24 px-6 flex items-center justify-between`}
      >
        <div className="flex flex-col w-[100vw]">
          {/* Logo e Links */}
          <div id="texto" className="flex flex-row justify-between items-center">
            <div className="text-dark-purple font-bold text-5xl dark:text-light-mode-purple">
              <Link to="/">AlzhCare</Link>
            </div>

            <div className="flex gap-8 text-dark-purple text-2xl dark:text-light-mode-purple">
              <Link to="/produto">O produto</Link>
              <Link to="/guia">Guia</Link>
              <Link to="/quemSomos">Quem somos</Link>
              <Link to="/jogo">Jogo</Link>
            </div>
          </div>

          {/* Toggle de Tema */}
          <div className="mt-4 flex justify-end">
            <button
              className={`relative w-14 h-8 bg-purple-700 rounded-full p-1 flex items-center transition-all ${
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

          {/* Linha divisória */}
          <div className="mt-4 mx-auto w-[97%] h-[2px] bg-dark-purple dark:bg-light-purple"></div>
        </div>
      </div>
    </div>
  );
}




