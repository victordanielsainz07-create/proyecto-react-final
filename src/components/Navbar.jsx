import { NavLink } from 'react-router-dom'

// Encabezado con el menú de navegación entre vistas
export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo">
        GameVault
      </NavLink>
      <nav className="navbar__links">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/acerca">Acerca de</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  )
}
