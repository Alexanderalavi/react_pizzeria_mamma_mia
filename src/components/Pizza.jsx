import React, { useEffect, useState } from 'react'

const Pizza = () => {

    const [pizza, setPizza] = useState([]) 
    
        useEffect(() => {
            consultarApiPizza()
        },[])
    
        const consultarApiPizza = async () => {
            const url = "http://localhost:5000/api/pizzas/p001"
            const response = await fetch (url)
            const data = await response.json()
            setPizza(data)
        }
 return (
    <div className="container mt-4 py-2">
     <div className="row g-4 justify-content-center">
          <div className="col-md-4" key={pizza.id}>
        <div className="card" style={{ width: '25rem' }} key={pizza.id}>
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
              <button type="button" className="btn btn-outline-dark">Ver Más 👀</button>
              <button type="button" className="btn btn-dark">Añadir 🛒</button>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Pizza
