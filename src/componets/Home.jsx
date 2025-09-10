import { ResponsiveHeader } from "./ResponsiveHeader"
import { Footer } from "./Footer"

export function Home(){
    return(
        <div>
            <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(/vovo.png)` }}>
                <ResponsiveHeader transparent />
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left pt-24 lg:pt-[200px] px-6">
                    <h1 className="text-white font-bold text-4xl max-w-md lg:max-w-2xl lg:text-7xl lg:leading-[80px]">
                        Cuidar de quem precisa, com amor e inovação
                    </h1>
                    <button className="text-purple-home bg-white font-bold px-6 py-3 rounded-full mt-8 lg:mt-12 lg:ml-0">
                        DESCUBRA +
                    </button>
                </div>
            </div>

            <div className="items-center py-10 lg:py-20 bg-chatcolorfundo dark:bg-dark-purple-home px-4">
                <h1 className="text-dark-purple dark:text-white font-bold text-4xl lg:text-[64px] text-center">
                    Nosso produto
                </h1>

                <p className="text-base lg:text-[24px] text-dark-purple dark:text-white text-center max-w-4xl mx-auto mt-6 lg:mt-10">
                    Nossa mochila inteligente foi desenvolvida para oferecer suporte diário a pessoas com Alzheimer, integrando tecnologia de ponta para garantir segurança e autonomia. Equipado com GPS, o dispositivo permite o monitoramento em tempo real, enquanto os lembretes programáveis auxiliam na rotina e tarefas diárias. Além disso, o sistema de reconhecimento facial ajuda o usuário a identificar pessoas próximas, reduzindo a ansiedade e confusão. Tudo isso é controlado por um aplicativo intuitivo, que também facilita o acompanhamento por parte dos cuidadores, promovendo um cuidado mais eficiente e tranquilo.
                </p>

                <div className="mt-10 overflow-x-auto whitespace-nowrap scroll-smooth py-4">
                    <img
                        src="/danca.jpeg"
                        className="inline-block w-60 h-48 lg:w-80 lg:h-60 mr-4 rounded-lg lg:hover:scale-105"
                        alt="Imagem 1"
                    />
                    <img
                        src="/dinga.jpeg"
                        className="inline-block w-60 h-48 lg:w-80 lg:h-60 mr-4 rounded-lg lg:hover:scale-105"
                        alt="Imagem 2"
                    />
                    <img
                        src="/fotosabado.jpeg"
                        className="inline-block w-60 h-48 lg:w-80 lg:h-60 mr-4 rounded-lg lg:hover:scale-105"
                        alt="Imagem 3"
                    />
                    <img
                        src="/taylor.jpeg"
                        className="inline-block w-60 h-48 lg:w-80 lg:h-60 mr-4 rounded-lg lg:hover:scale-105"
                        alt="Imagem 4"
                    />
                    <img
                        src="/danca.jpeg"
                        className="inline-block w-60 h-48 lg:w-80 lg:h-60 mr-4 rounded-lg lg:hover:scale-105"
                        alt="Imagem 5"
                    />
                    <img
                        src="/dinga.jpeg"
                        className="inline-block w-60 h-48 lg:w-80 lg:h-60 mr-4 rounded-lg lg:hover:scale-105"
                        alt="Imagem 6"
                    />
                </div>
            </div>

            <div className="bg-light-purple dark:bg-dark-mode-purple flex flex-col lg:flex-row items-center justify-center p-8 gap-8">
                <div className="max-w-lg text-center lg:text-left">
                    <h1 className="text-white font-bold text-4xl lg:text-[64px] mb-6">Nosso objetivo</h1>
                    <p className="text-white text-base lg:text-[24px]">
                        Promover uma solução tecnológica para os desafios enfrentados por pessoas com doença de Alzheimer significa desenvolver ferramentas que ajudem a preservar sua autonomia, segurança e qualidade de vida. Com o avanço da tecnologia, é possível criar sistemas que auxiliem na memória, na localização e no reconhecimento de pessoas e objetos, reduzindo os riscos de desorientação e esquecimentos. Além disso, essas soluções podem oferecer suporte também aos cuidadores, facilitando o monitoramento e a comunicação, e contribuindo para um cuidado mais eficaz e humanizado.
                    </p>
                </div>
                <img className="w-full max-w-sm lg:w-1/2 lg:max-w-none object-contain" src="/team.png" alt="Equipe" />
            </div>

            <Footer />
        </div>
    )
}