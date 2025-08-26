import { Link } from "react-router-dom";

export function SideMenu() {
    return (

        <section className="dark:bg-[var(--color-white)] bg-[var(--color-dark-purple-home)]">
        <div className="bg-[var(--color-white)] dark:bg-[var(--color-dark-purple-home)] w-[315px] h-screen p-4 rounded-r-3xl">
            <div className="flex flex-col">
                <div className="flex flex-row [color:var(--color-dark-purple)] dark:[color:var(--color-white)] justify-between items-center">
                    <div>

                    </div>
                    <div>
                        <h2 className="text-4xl font-bold p-4">AlzhCare</h2>
                    </div>
                </div>
                <div>
                    <hr className=" [color:var(--color-dark-purple)] border-b-1"/>
                </div>
            </div>
            

            

            <ul className="flex flex-col gap-5">
                <li>
                    <Link to="/jogo" className="block pl-4 text-2xl [color:var(--color-dark-purple)] font-medium">Jogo</Link>
                </li>
                <li>
                    <Link to="/guiainstrucao" className="block pl-4 text-2xl  [color:var(--color-dark-purple)] font-medium">Guia</Link>
                </li>
                <li>
                    <Link to="/produto" className="block pl-4 text-2xl [color:var(--color-dark-purple)] font-medium">O produto</Link>
                </li>
                <li>
                    <Link to="/quemsomos" className="block pl-4 text-2xl [color:var(--color-dark-purple)] font-medium ">Quem somos</Link>
                </li>
            </ul>
        </div>
        </section>
    )
}
