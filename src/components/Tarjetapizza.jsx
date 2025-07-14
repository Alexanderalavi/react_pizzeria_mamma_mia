import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Tarjetapizza = () => {
  const { agregarCarro } = useCart()
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    consultarApiPizzas()
  }, [])

  const consultarApiPizzas = async () => {
    const url = "http://localhost:5000/api/pizzas"
    const response = await fetch(url)
    const data = await response.json()
    setPizzas(data)
  }

  return (
    <div className="container mt-4 py-2">
      <div className="row g-4 justify-content-center">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <div className="card" style={{ width: '25rem' }}>
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                <h5 className="card-title text-capitalize">Pizza {pizza.name}</h5>
                <hr />
                <p>{pizza.desc}</p>
                <hr />
                <section className="ingredientes">
                  <h6>Ingredientes:</h6>
                  <ul className="list-unstyled">
                    {pizza.ingredients.map((ingrediente, i) => (
                      <li key={i}>🍕 {ingrediente}</li>
                    ))}
                  </ul>
                </section>
                <hr />
                <h5 className="precio">Precio: ${pizza.price}</h5>
                <div className="botoneria d-flex justify-content-between">
                  <Link to={`/pizza/${pizza.id}`} className="btn btn-outline-dark">
                    Ver Más 👀
                  </Link>
                  <button onClick={() => agregarCarro(pizza)} className="btn btn-dark">
                    Añadir 🛒
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tarjetapizza