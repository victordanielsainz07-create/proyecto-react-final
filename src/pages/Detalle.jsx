import { useParams, useNavigate, Link } from 'react-router-dom'
import { useFetch, API_URL } from '../hooks/useFetch.js'

export default function Detalle() {
  const { id } = useParams() // parámetro dinámico de la URL
  const navigate = useNavigate()
  const { datos, cargando, error } = useFetch(API_URL)

  if (cargando) {
    return (
      <div className="estado">
        <div className="spinner" />
        <p>Cargando información...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="estado estado--error">
        <h2>No pudimos cargar los datos</h2>
        <p>Revisa tu conexión a internet e inténtalo de nuevo más tarde.</p>
        <small>Detalle técnico: {error}</small>
      </div>
    )
  }

  // useParams devuelve texto, por eso se convierte a número
  const juego = datos.find((item) => item.id === Number(id))

  if (!juego) {
    return (
      <div className="estado">
        <h2>Videojuego no encontrado</h2>
        <p>No existe ningún elemento con el identificador "{id}".</p>
        <Link className="btn" to="/">
          Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <section className="detalle">
      <img className="detalle__img" src={juego.imagen} alt={juego.titulo} />
      <div className="detalle__info">
        <span className="etiqueta">{juego.genero}</span>
        <h1>{juego.titulo}</h1>
        <p className="detalle__descripcion">{juego.descripcion}</p>
        <ul className="detalle__datos">
          <li>
            <strong>Plataforma:</strong> {juego.plataforma}
          </li>
          <li>
            <strong>Desarrollador:</strong> {juego.desarrollador}
          </li>
          <li>
            <strong>Año de lanzamiento:</strong> {juego.anio}
          </li>
          <li>
            <strong>Calificación:</strong> {juego.calificacion} / 10
          </li>
        </ul>
        <button className="btn" onClick={() => navigate(-1)}>
          ← Volver
        </button>
      </div>
    </section>
  )
}
