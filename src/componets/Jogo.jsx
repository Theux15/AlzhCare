import { Header } from "./Header.jsx"
import { Footer } from "./Footer"
import Galaxia from "../assets/Galaxia.png"
import Play from "../assets/Play.png"
import Fotomais from "../assets/Fotomais.png"

export function Jogo() {
    return (
        <div className="bg-[var(--color-chatcolor)] dark:bg-[var(--color-dark-purple-home)]">
            <div
                className="h-[150vh] w-full bg-cover bg-center flex flex-col"
                style={{ backgroundImage: `url(${Galaxia})` }}
            >

                <Header />


                <div
                    className="flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6"

                >
                    <h1
                        className="text-white font-bold 
                                   lg:text-[5.5rem] sm:text-5xl md:text-7xl 
                                   leading-tight max-w-2xl"

                    >
                        MindJourney
                    </h1>

                    <p
                        className="font-inter text-sm sm:text-base md:text-xl lg:text-[1.5rem] 
                                   text-white mt-6 max-w-3xl"

                    >
                        MindJourney é um jogo interativo em que seu personagem deve enfrentar os desafios e puzzles do cérebro humano para tentar recuperar memórias perdidas no subconsciente.
                    </p>

                    <button
                        className="w-[225px] h-[65px] mt-10 bg-[var(--color-purple-home)] text-white text-[1.25rem] font-bold rounded-full shadow-md hover:opacity-90 transition"

                    >
                        Jogar
                    </button>




                </div>

            </div>
            <div className="lg:w-[67.5rem] lg:h-[40rem] mx-auto mt-[-20rem] w-40 h-40 bg-[var(--color-light-purple)] rounded-2xl flex items-center justify-center hover:scale-105 transition">
                <img src={Play} alt="Play" className="w-16 h-16" />
            </div>

            <div className="bg-[var(--color-chatcolor)] dark:bg-[var(--color-dark-purple-home)]">
                <div className=" items-center justify-items-center flex flex-col gap-4 mt-20 mb-15 [color:var(--color-dark-purple)]">

                    <h1 className="font-poppins text-[2.5rem] font-bold purple lg:text-[4.5rem] dark:[color:var(--color-white)] ">A História</h1>

                    <p className="font-inter text-[1.5rem] text-center max-w-3xl font-medium lg:text-[1.5rem] dark:[color:var(--color-white)]">
                        MindJourney se passa dentro da mente fragmentada de uma pessoa com Alzheimer. Quatro personagens exploram esse mundo perdido, resolvendo puzzles para recuperar fragmentos de memória espalhados. Cada lembrança resgatada ajuda a montar o quebra-cabeça da identidade perdida, enquanto enfrentam desafios que refletem as dificuldades da doença. Com visual pixel art 2D, o jogo convida o jogador a uma jornada emocional pela mente humana em busca da memória e da esperança.
                    </p>

                    <div className="lg:w-[31.5rem] lg:h-[20.5rem] mx-auto mt-[2rem] w-40 h-40 bg-[color:var(--color-light-purple)] rounded-2xl flex items-center justify-center hover:scale-105 transition">
                        <img src={Fotomais} alt="Fotomais" className="w-16 h-16" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
