import { Header } from "./Header.jsx"
import { Link } from "react-router-dom"
import { ComponentesProduto } from "./ComponentesProduto.jsx"
import esp32Img from '../assets/Esp32.webp';
import AcelerometroGiroscopio from '../assets/AcelerometroGiroscopio.png';
import AutoFalante from '../assets/AutoFalante.png';
import DfPlayerMini from '../assets/DfPlayerMini.png';
import Jumpers from '../assets/Jumpers.png';
import ModuloGPS from '../assets/ModuloGps.png';
import ModuloGSM from '../assets/ModuloGSM.png';
import Protoboard from '../assets/ProtoBoard.png';
import RealTimeClock from '../assets/RealTimeClock.png';
import SensorCardiaco from '../assets/SensorCardiaco.png';


export function Produto(){
    return(
        

        <div className="bg-[var(--color-chatcolor)] dark:bg-[var(--color-dark-purple-home)]">   
            <Header />
            <div className="items-center justify-items-center flex flex-col gap-4 mt-20 mb-15 [color:var(--color-dark-purple)]">
                <h1 className="font-poppins text-[38px] font-bold purple lg:text-7xl dark:[color:var(--color-light-purple)] ">Produto</h1>

                <p className="font-inter text-[18px] text-center max-w-3xl font-medium lg:text-3xl dark:[color:var(--color-light-purple)]">
                    AlzhCare é um projeto criado para ajudar no cuidado de pessoas com Alzheimer, oferecendo apoio prático e informações úteis para familiares e cuidadores, e esse é nosso produto.
                </p>
            </div>



            <div className="flex flex-row items-center gap-10 mb-5 mt-5 justify-center lg:grid lg:grid-cols-2 lg:pl-[10%] lg:pr-[10%]">
                <div className="">
                    <img className="rounded-xl w-[165px] h-[125px] lg:w-[550px] lg:h-[400px]" src="https://i.pinimg.com/736x/a6/ea/30/a6ea304f8b3b4fe1f89e58508bbe07b1.jpg" alt="" />
                </div>
                <div className=" [color:var(--color-dark-purple)] ">
                    <p className="text-lg font-semibold lg:text-3xl text-center dark:[color:var(--color-white)]">AlzhCare</p>
                    <p className="text-lg font-semibold lg:text-3xl text-center dark:[color:var(--color-white)] ">Valor: <br /> R$ 00,00</p>
                </div>
            </div>



            <section className="flex flex-col p-[5%] lg:grid lg:grid-cols-2 lg:pl-[5%] lg:pr-[5%]">
                
                <ComponentesProduto
                    imgSrc={esp32Img}
                    title="Esp32"
                    value="R$ 00,00"
                />

                <ComponentesProduto
                    imgSrc={AcelerometroGiroscopio}
                    title="Acelerômetro/Giroscópio"
                    value="R$ 00,00"
                />

                <ComponentesProduto
                    imgSrc={AutoFalante}
                    title="Auto Falante"
                    value="R$ 00,00"
                />

                <ComponentesProduto
                    imgSrc={DfPlayerMini}
                    title="DFPlayer Mini"
                    value="R$ 00,00"
                />

                <ComponentesProduto
                    imgSrc={Jumpers}
                    title="Jumpers"
                    value="R$ 00,00"
                />

                <ComponentesProduto
                    imgSrc={ModuloGPS}
                    title="Módulo GPS"
                    value="R$ 00,00"
                />

                <ComponentesProduto
                    imgSrc={ModuloGSM}
                    title="Módulo GSM"
                    value="R$ 00,00"
                />

                <ComponentesProduto
                    imgSrc={Protoboard}
                    title="Protoboard"
                    value="R$ 00,00"
                />

                <ComponentesProduto
                    imgSrc={RealTimeClock}
                    title="Real Time Clock"
                    value="R$ 00,00"
                />

                <ComponentesProduto
                    imgSrc={SensorCardiaco}
                    title="Sensor Cardíaco"
                    value="R$ 00,00"
                />

            </section>
            <Link to="/sidemenu" className="block p-4 hover:bg-[var(--color-dark-purple)] dark:hover:bg-[var(--color-light-purple)]">Menu Lateral</Link>
        </div>
    )
}  