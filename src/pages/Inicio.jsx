import { useFetch, API_URL } from '../hooks/useFetch.js'
import Lista from '../components/Lista.jsx'

export default function Inicio() {
  const { datos, cargando, error } = useFetch(API_URL)

  if (cargando) {
    return (
      <div className="estado">
        <div className="spinner" />
        <p>Cargando videojuegos...</p>
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

  return (
    <>
      <section className="hero">
        <h1>Colección de videojuegos</h1>
        <p>Explora el catálogo y descubre los detalles de cada título.</p>
      </section>
      <Lista items={datos} />
    </>
  )
}
