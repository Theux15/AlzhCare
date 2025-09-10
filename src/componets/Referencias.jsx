import { Header } from "./Header.jsx"
import { Footer } from "./Footer"

export function Referencias() {
   return (
        <div className="bg-[var(--color-chatcolor)] dark:bg-[var(--color-dark-purple-home)]">   
            <Header />

            <div className="flex flex-col items-center mt-20 mb-16 [color:var(--color-dark-purple)] px-4">
                <h1 className="font-poppins text-[2.5rem] lg:text-[85px] font-bold purple dark:[color:var(--color-dark-text)] mb-10 text-center">
                    Referências
                </h1>

                <div className="mb-8 text-center max-w-xs lg:max-w-5xl">
                    <p className="font-inter text-[18px] lg:text-[24px] font-bold dark:[color:var(--color-white)] mb-1">
                        Estudo sobre os estágios iniciais do Alzheimer e métodos de intervenção cognitiva.
                    </p>
                    <p className="font-inter text-[18px] lg:text-[24px] font-regular dark:[color:var(--color-white)]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed dictum quam. 
                        <br />
                        https://doi.org/10.1000/alzheimer-intervention-2024
                    </p>
                </div>


                <div className="mb-8 text-center max-w-xs lg:max-w-5xl">
                    <p className="font-inter text-[18px] lg:text-[24px] font-bold dark:[color:var(--color-white)] mb-1">
                        Análise do uso de tecnologia assistiva em pacientes com demência.
                    </p>
                    <p className="font-inter text-[18px] lg:text-[24px] font-regular dark:[color:var(--color-white)]">
                        Donec vel sapien nec erat tincidunt euismod. Vestibulum ante ipsum primis in faucibus.
                        <br />
                        https://doi.org/10.1000/assistive-tech-study
                    </p>
                </div>


                <div className="mb-8 text-center max-w-xs lg:max-w-5xl">
                    <p className="font-inter text-[18px] lg:text-[24px] font-bold dark:[color:var(--color-white)] mb-1">
                        Guia clínico para cuidadores de pessoas com Alzheimer.
                    </p>
                    <p className="font-inter text-[18px] lg:text-[24px] font-regular dark:[color:var(--color-white)]">
                        Pellentesque ac orci vehicula, dapibus sem at, scelerisque orci.
                        <br />
                        https://doi.org/10.1000/caregiver-guide-2023
                    </p>
                </div>


                <div className="mb-8 text-center max-w-xs lg:max-w-5xl">
                    <p className="font-inter text-[18px] lg:text-[24px] font-bold dark:[color:var(--color-white)] mb-1">
                        Artigo sobre estimulação auditiva e visual no tratamento de Alzheimer.
                    </p>
                    <p className="font-inter text-[18px] lg:text-[24px] font-regular dark:[color:var(--color-white)]">
                        Morbi fermentum augue nec luctus posuere. Integer sollicitudin libero ut sapien hendrerit.
                        <br />
                        https://doi.org/10.1000/audio-visual-stimulation
                    </p>
                </div>
            </div>

            <Footer />
        </div>
   )
}
