import { Header } from "./Header.jsx"
import { Footer } from "./Footer"
import Galaxia from "../assets/Galaxia.png"

export function Jogo() {
    return(
        <div>
            <div className="h-screen w-full  bg-cover bg-center" style={{ backgroundImage: `url(${Galaxia})` }}>
                             <Header/>
                            <h1 className="text-white font-bold text-7xl flex max-w-2xl pt-[300px] leading-[80px] px-6">Cuidar de quem precisa, com amor e inovação</h1>
                            <button className="text-purple-home bg-white font-bold px-6 py-3 rounded-full mt-18 ml-30">DESCRUBRA +</button>
                        </div>
            <Footer />
            
        </div>
    )
}