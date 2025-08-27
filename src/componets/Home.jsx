import Vovo from "../images/vovo.png"
import { Header } from "./Header"

export function Home(){
    return(
        <div>
            <div className="h-screen w-full  bg-cover bg-center" style={{ backgroundImage: `url(${Vovo})` }}>
                 <Header transparent />
                <h1 className="text-white font-bold text-7xl flex max-w-2xl pt-[300px] leading-[80px] px-6">Cuidar de quem precisa, com amor e inovação</h1>
                <button className="text-purple-home bg-white font-bold px-6 py-3 rounded-full mt-18 ml-30">DESCRUBRA +</button>
            </div>

            <div className="items-center bg-chatcolor dark:bg-dark-purple">
                <h1 className="text-dark-purple dark:text-white font-bold text-[64px] text-center">Nosso produto</h1>

                <p className="text-[24px] dark:text-white text-center ml-90 mr-90 mt-6">Nossa mochila inteligente foi desenvolvida para oferecer suporte diário a pessoas com Alzheimer, integrando tecnologia de ponta para garantir segurança e autonomia. Equipado com GPS, o dispositivo permite o monitoramento em tempo real, enquanto os lembretes programáveis auxiliam na rotina e tarefas diárias. Além disso, o sistema de reconhecimento facial ajuda o usuário a identificar pessoas próximas, reduzindo a ansiedade e confusão. Tudo isso é controlado por um aplicativo intuitivo, que também facilita o acompanhamento por parte dos cuidadores, promovendo um cuidado mais eficiente e tranquilo.</p>

                <div className="overflow-x-auto whitespace-nowrap scroll-smooth py-4 px-6  py-8">
                    <img
                         src="src/images/danca.jpeg"
                        className="inline-block w-64 h-40 mr-4 rounded-lg w-80 h-60 lg:hover:scale-105 "
                        alt="Imagem 1"/>
                    <img
                        src="src/images/dinga.jpeg"
                        className="inline-block w-64 h-40 mr-4 rounded-lgw-80 h-60 hover:scale-105"
                        alt="Imagem 2"/>
                    <img
                        src="src/images/fotosabado.jpeg"
                        className="inline-block w-64 h-40 mr-4 rounded-lgw-80 h-60 hover:scale-105"
                        alt="Imagem 3"/>
                    <img
                        src="src/images/taylor.jpeg"
                        className="inline-block w-64 h-40 mr-4 rounded-lgw-80 h-60 hover:scale-105"
                        alt="Imagem 3"/>
                    <img
                         src="src/images/danca.jpeg"
                        className="inline-block w-64 h-40 mr-4 rounded-lgw-80 h-60 hover:scale-105"
                        alt="Imagem 1"/>
                    <img
                        src="src/images/dinga.jpeg"
                        className="inline-block w-64 h-40 mr-4 rounded-lgw-80 h-60 hover:scale-105"
                        alt="Imagem 2"/>
                    <img
                        src="src/images/fotosabado.jpeg"
                        className="inline-block w-64 h-40 mr-4 rounded-lgw-80 h-60 hover:scale-105"
                        alt="Imagem 3"/>
                  
            
                </div>
            </div>

            <div className="bg-light-purple  dark:bg-dark-mode-purple flex items-center justify-center p-8 gap-8">

                
  <div className="max-w-lg  text-center ml-16">
    <h1 className="text-white font-bold text-[64px] mb-6">Nosso objetivo</h1>
    <p className="text-white text-[24px]">
      Promover uma solução tecnológica para os desafios enfrentados por pessoas com doença de Alzheimer significa desenvolver ferramentas que ajudem a preservar sua autonomia, segurança e qualidade de vida. Com o avanço da tecnologia, é possível criar sistemas que auxiliem na memória, na localização e no reconhecimento de pessoas e objetos, reduzindo os riscos de desorientação e esquecimentos. Além disso, essas soluções podem oferecer suporte também aos cuidadores, facilitando o monitoramento e a comunicação, e contribuindo para um cuidado mais eficaz e humanizado.
    </p>
  </div>

  <img className="w-1/2 dark:bg-dark-mode-purple object-contain" src="src/images/team.png" alt="Equipe" />
  </div>

        
        </div>
    )
} 