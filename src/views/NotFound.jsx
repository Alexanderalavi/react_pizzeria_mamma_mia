import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
 <section className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
  <h2 className="mb-4">Link equivocado! Volver al menu principal:</h2>
  <Link to='/'><img className='tower' src="src/assets/img/tower.webp" alt="Hora Clinic" /></Link>
 </section>
  )
}

export default NotFound
