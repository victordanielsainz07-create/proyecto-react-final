import Card from './Card.jsx'

// Itera sobre los datos de la API y renderiza una tarjeta por elemento
export default function Lista({ items }) {
  if (items.length === 0) {
    return <p className="estado">No hay elementos para mostrar.</p>
  }

  return (
    <section className="grid">
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          titulo={item.titulo}
          imagen={item.imagen}
          genero={item.genero}
        />
      ))}
    </section>
  )
}
