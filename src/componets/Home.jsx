import { ResponsiveHeader } from "./ResponsiveHeader"
import { Footer } from "./Footer"
import { useState } from "react"
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react"

export function Home(){
    const images = [
        "/danca.jpeg",
        "/dinga.jpeg", 
        "/fotosabado.jpeg",
        "/taylor.jpeg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length;
    const getNextIndex = () => (currentIndex + 1) % images.length;
    return(
        <div>
            <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(/vovo.png)` }}>
                <ResponsiveHeader transparent />

                <div className="flex flex-col items-center text-center lg:items-start lg:text-left pt-8 lg:pt-[200px] px-6 lg:pl-10">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="text-white font-bold text-4xl max-w-md lg:max-w-2xl lg:text-7xl lg:leading-[80px] lg:text-left">
                            Cuidar de quem precisa, com amor e inovação
                        </h1>
                        <div className="flex flex-col h-100 justify-end lg:h-auto lg:justify-start lg:self-center lg:mr-15">
                            <button className="text-purple-home bg-white font-bold px-6 py-3 rounded-full mt-8 lg:mt-12 lg:self-center">
                                DESCUBRA +
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="items-center py-10 lg:py-20 bg-chatcolorfundo dark:bg-dark-purple-home px-4">
                <h1 className="text-dark-purple dark:text-white font-bold text-4xl lg:text-[64px] text-center">
                    Nosso produto
                </h1>

                <p className="text-base lg:text-[24px] text-dark-purple dark:text-white text-center max-w-4xl mx-auto mt-6 lg:mt-10">
                    Nossa mochila inteligente foi desenvolvida para oferecer suporte diário a pessoas com Alzheimer, integrando tecnologia de ponta para garantir segurança e autonomia. Equipado com GPS, o dispositivo permite o monitoramento em tempo real, enquanto os lembretes programáveis auxiliam na rotina e tarefas diárias. Além disso, o sistema de reconhecimento facial ajuda o usuário a identificar pessoas próximas, reduzindo a ansiedade e confusão. Tudo isso é controlado por um aplicativo intuitivo, que também facilita o acompanhamento por parte dos cuidadores, promovendo um cuidado mais eficiente e tranquilo.
                </p>

                <div className="mt-10 flex items-center justify-center gap-8 lg:gap-12 px-4 relative overflow-hidden">

                    <button 
                        onClick={prevSlide}
                        className="absolute left-2 lg:left-8 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                    >
                        <CaretLeftIcon size={24} className="text-dark-purple" />
                    </button>

                    <img
                        src={images[getPrevIndex()]}
                        className="w-40 h-30 lg:w-80 lg:h-60 rounded-lg opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                        alt="Imagem anterior"
                        onClick={prevSlide}
                    />
                    
                    <img
                        src={images[currentIndex]}
                        className="w-60 h-45 lg:w-[647px] lg:h-[485px] rounded-lg shadow-lg transform scale-105 hover:scale-110 transition-transform cursor-pointer z-10 relative"
                        alt="Imagem atual"
                    />
                    
                    <img
                        src={images[getNextIndex()]}
                        className="w-40 h-30 lg:w-80 lg:h-60 rounded-lg opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                        alt="Imagem próxima"
                        onClick={nextSlide}
                    />

                    <button 
                        onClick={nextSlide}
                        className="absolute right-2 lg:right-8 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                    >
                        <CaretRightIcon size={24} className="text-dark-purple" />
                    </button>
                </div>

                <div className="flex justify-center mt-6 gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                index === currentIndex 
                                    ? 'bg-dark-purple dark:bg-white' 
                                    : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                        />
                    ))}
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