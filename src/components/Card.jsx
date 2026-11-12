import { Link } from 'react-router-dom'

// Tarjeta reutilizable: recibe la información por props
export default function Card({ id, titulo, imagen, genero }) {
  return (
    <article className="card">
      <img className="card__img" src={imagen} alt={titulo} loading="lazy" />
      <div className="card__body">
        <span className="etiqueta">{genero}</span>
        <h3>{titulo}</h3>
        <Link className="btn" to={`/detalle/${id}`}>
          Ver más
        </Link>
      </div>
    </article>
  )
}
