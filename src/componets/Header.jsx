import { Link } from "react-router-dom"
import { MoonIcon, SunDimIcon } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

export function Header({ transparent = false }) {
    const [theme, setTheme] =useState(() => localStorage.getItem("theme") ?? "")

    useEffect(() => {
      localStorage.setItem("theme", theme)
      const tagHTML = document.documentElement
      tagHTML.classList.remove("dark")


      if(theme === "dark"){
        tagHTML.classList.add("dark")
      }
    }, [theme])
  return (
    <div>
      <div
        className={`
          ${transparent ? "bg-transparent !bg-none" : "bg-light-purple dark:bg-dark-mode-purple"} 
          h-24 px-6 flex items-center justify-between
        `}
      >
        <div className="flex flex-col w-[100vw]">
          <div id="texto" className="flex flex-row justify-between">
            <div className="text-dark-purple font-bold text-5xl dark:text-light-mode-purple">
              <Link to="/">AlzhCare</Link>
            </div>

            <div className="flex gap-8 text-dark-purple text-2xl dark:text-light-mode-purple flex-row items-center">
              <Link to="/produto">O produto</Link>
              <Link to="/guia">Guia</Link>
              <Link to="/quemSomos">Quem somos</Link>
              <Link to="/jogo">Jogo</Link>
            </div>
          </div>
          <button className="cursor-pointer" onClick={() => setTheme(prevTheme => prevTheme ==="dark" ? "light" : "dark")}>
            {theme === "dark" ?(
              <SunDimIcon size={32} weight="fill" className="text-yellow absolute-left-2" />
            ) : (
              <MoonIcon size={32} weight="fill" className="text-yellow absolute-right-2"/>
            )}
            <div
              className={`absolute top-1 w-6 h-6 rounded-full bg-purple-700 transform transition-transform duration-300 ${
               theme === "dark" ? "translate-x-8" : "translate-x-0"
              }`}
            ></div>
          </button>

          <div>
            <div className="mt-4 mx-auto w-[97%] h-[2px] bg-dark-purple dark:bg-light-purple"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

