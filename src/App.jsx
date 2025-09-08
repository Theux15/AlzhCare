import { Header } from './componets/Header.jsx'
import { Home } from './componets/Home.jsx'
import { Produto } from './componets/Produto.jsx'
import { QuemSomos } from './componets/QuemSomos.jsx'
import { GuiaInstrucao } from './componets/GuiaInstrucao.jsx'
import { Routes, Route } from 'react-router-dom'
import { SideMenu } from './componets/SideMenu.jsx'
import { Referencias} from './componets/Referencias.jsx'
import {Jogo} from './componets/Jogo.jsx'



export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/guiainstrucao" element={<GuiaInstrucao />} />
        <Route path="/sidemenu" element={<SideMenu />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/referencias" element={<Referencias />} />
      </Routes>
    </div>
  )
}
