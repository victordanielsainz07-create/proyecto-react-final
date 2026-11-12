export default function Acerca() {
  return (
    <section className="pagina">
      <h1>Acerca de</h1>
      <p>
        GameVault es una aplicación web desarrollada como Proyecto Final
        Integrador. Muestra una colección de videojuegos cuyos datos se
        obtienen desde un archivo JSON alojado en GitHub, que funciona como
        una API externa.
      </p>
      <h2>Tecnologías utilizadas</h2>
      <ul>
        <li>React con Vite</li>
        <li>React Router DOM para el enrutamiento</li>
        <li>Fetch API dentro de un custom hook</li>
        <li>CSS con diseño responsivo</li>
        <li>GitHub como API y Netlify para el despliegue</li>
      </ul>
    </section>
  )
}
