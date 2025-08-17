import { Header } from './componets/Header.jsx'
import { Home } from './componets/Home.jsx'
import { Produto } from './componets/Produto.jsx'
import { Routes, Route } from 'react-router-dom'


export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Produto />} />
      </Routes>
    </div>
  )
}
