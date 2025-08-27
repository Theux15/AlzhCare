import { Link } from "react-router-dom";
import joystickIcone from '../assets/joystick.svg';
import bookIcone from '../assets/book.svg';
import backpackIcone from '../assets/backpack.svg';
import groupsIcone from '../assets/groups.svg';
import dehazeIcone from '../assets/dehaze.svg';


export function SideMenu() {
    return (

        <div className="bg-[var(--color-white)] dark:bg-[var(--color-dark-purple-home)] w-[315px] h-screen p-4 rounded-r-3xl">
            <div className="flex flex-col">
                <div className="flex flex-row [color:var(--color-dark-purple)] dark:[color:var(--color-white)] justify-around items-center">
                    <div>
                        <img src={dehazeIcone} alt="" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold p-4">AlzhCare</h2>
                    </div>
                </div>
                <div>
                    <hr className=" [color:var(--color-dark-purple)] border-b-1"/>
                </div>
            </div>
            

            

            <ul className="flex flex-col gap-5 mt-20">
                <li className="pl-4 grid grid-cols-[auto_1fr] gap-5 items-center">
                    <img src={joystickIcone} alt="" />
                    <Link to="/jogo" className="block  text-2xl [color:var(--color-dark-purple)] font-medium">Jogo</Link>
                </li>
                <li className="pl-4 grid grid-cols-[auto_1fr] gap-5 items-center">
                    <img src={bookIcone} alt="" />
                    <Link to="/guiainstrucao" className="block  text-2xl [color:var(--color-dark-purple)] font-medium">Guia</Link>
                </li>
                <li className="pl-4 grid grid-cols-[auto_1fr] gap-5 items-center">
                    <img src={backpackIcone} alt="" className="w-[30px] h-[30px]" />
                    <Link to="/produto" className="block  text-2xl [color:var(--color-dark-purple)] font-medium">O produto</Link>
                </li>
                <li className="pl-4 grid grid-cols-[auto_1fr] gap-5 items-center">
                    <img src={groupsIcone} alt="" />
                    <Link to="/quemsomos" className="block  text-2xl [color:var(--color-dark-purple)] font-medium ">Quem somos</Link>
                </li>
            </ul>
        </div>
    )
}
