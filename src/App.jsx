import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import Detalle from './pages/Detalle.jsx'
import Acerca from './pages/Acerca.jsx'
import Contacto from './pages/Contacto.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'

// Componente raíz: estructura general + definición de rutas
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>GameVault · Proyecto Final Integrador con React</p>
      </footer>
    </>
  )
}
