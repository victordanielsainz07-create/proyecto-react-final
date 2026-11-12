import { useState, useEffect } from 'react'

// URL "raw" del JSON en GitHub.
// CAMBIA "USUARIO" y "REPO" por tu usuario y el nombre de tu repositorio.
export const API_URL =
  'https://raw.githubusercontent.com/victordanielsainz07-create/proyecto-react-final/main/api/videojuegos.json'

// Custom hook que encapsula el consumo de la API:
// devuelve los datos, el estado de carga y el posible error.
export function useFetch(url) {
  const [datos, setDatos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelado = false

    fetch(url)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(`La API respondió con el código ${respuesta.status}`)
        }
        return respuesta.json()
      })
      .then((json) => {
        if (!cancelado) setDatos(json)
      })
      .catch((err) => {
        if (!cancelado) setError(err.message)
      })
      .finally(() => {
        if (!cancelado) setCargando(false)
      })

    // Evita actualizar el estado si el componente se desmonta antes de terminar
    return () => {
      cancelado = true
    }
  }, [url])

  return { datos, cargando, error }
}
