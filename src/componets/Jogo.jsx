import { Header } from "./Header.jsx"
import { Footer } from "./Footer"
import Galaxia from "../assets/Galaxia.png"
import Play from "../assets/Play.png"
import Fotomais from "../assets/Fotomais.png"

export function Jogo() {
    return (
        <div className="bg-[var(--color-chatcolor)] dark:bg-[var(--color-dark-purple-home)]">
            <div
                className="min-h-screen w-full bg-cover bg-center flex flex-col"
                style={{ backgroundImage: `url(${Galaxia})` }}
            >

                <Header />


                <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
                    <h1
                        className="text-white font-bold text-4xl lg:text-[5.5rem]  leading-tight max-w-2xl"
                    >
                        MindJourney
                    </h1>

                    <p
                        className="font-inter text-base lg:text-[1.5rem] text-white mt-6 max-w-md lg:max-w-3xl font-regular"
                    >
                        MindJourney é um jogo interativo em que seu personagem deve enfrentar os desafios e puzzles do cérebro humano para tentar recuperar memórias perdidas no subconsciente.
                    </p>

                    <button
                        className="w-40 h-12 mt-8 lg:w-[18rem] lg:h-[5rem] bg-[var(--color-purple-home)] text-white text-base lg:text-[1.5rem] font-bold rounded-full shadow-md hover:opacity-90 transition"
                    >
                        JOGAR
                    </button>
                </div>
            </div>

            <div className="w-72 h-44 
                lg:w-[67.5rem] lg:h-[40rem] 
                mx-auto -mt-16 lg:-mt-32 
                bg-[var(--color-light-purple)] rounded-2xl flex items-center justify-center 
                hover:scale-105 transition">
                <img src={Play} alt="Play"
                    className="w-12 h-12 lg:w-[9.3rem] lg:h-[9.3rem]" />
            </div>


            <div className="bg-[var(--color-chatcolor)] dark:bg-[var(--color-dark-purple-home)] px-4">
                <div className="items-center justify-items-center flex flex-col gap-6 mt-20 mb-16 text-center [color:var(--color-dark-purple)]">
                    <h1 className="font-poppins text-2xl lg:text-[4.5rem] font-bold text-purple dark:text-white">
                        A História
                    </h1>

                    <p className="font-inter text-base lg:text-xl text-center max-w-md lg:max-w-[1000px] font-regular dark:text-white mx-auto">
                        MindJourney se passa dentro da mente fragmentada de uma pessoa com Alzheimer. Quatro personagens exploram esse mundo perdido, resolvendo puzzles para recuperar fragmentos de memória espalhados. Cada lembrança resgatada ajuda a montar o quebra-cabeça da identidade perdida, enquanto enfrentam desafios que refletem as dificuldades da doença. Com visual pixel art 2D, o jogo convida o jogador a uma jornada emocional pela mente humana em busca da memória e da esperança.
                    </p>

                    <div className="w-[330px] h-[215px]
                        lg:w-[31.5rem] lg:h-[20.5rem] 
                        mx-auto mt-4 lg:mt-8 
                        bg-[var(--color-light-purple)] rounded-2xl 
                        flex items-center justify-center hover:scale-105 transition">
                        <img src={Fotomais} alt="Fotomais"
                            className="w-12 h-12 lg:w-[6.25rem] lg:h-[6.25rem]" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
