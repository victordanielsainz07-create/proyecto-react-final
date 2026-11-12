import { Link } from 'react-router-dom'

// Ruta comodín: se muestra cuando la URL no existe
export default function NoEncontrada() {
  return (
    <div className="estado">
      <p className="error404">404</p>
      <h2>Página no encontrada</h2>
      <p>La dirección que intentas visitar no existe.</p>
      <Link className="btn" to="/">
        Volver al inicio
      </Link>
    </div>
  )
}
