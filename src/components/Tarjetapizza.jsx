import React from 'react'

const Tarjetapizza = (props) => {
  return (
    <div className="card col-3" style={{ width: '32rem' }}>
      <img src={props.pizza.img} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{props.pizza.name}</h5>
        <hr className="linea" />
        <section className="ingredientes">
        <h3>Ingredientes:</h3>
       <ul className="list-unstyled">
             {props.pizza.ingredients.map((ingrediente, indice) => (<li key={indice}>🍕 {ingrediente}</li>))}
       </ul>
        </section>
         <hr className="linea" /> 
         <h5 className="precio">Precio: ${props.pizza.price}</h5>
        <div className="botoneria">
            <button type="button" className="btn btn-outline-dark">Ver Más 👀</button>
            <button type="button" className="btn btn-dark">añadir🛒</button>

        </div>
      </div>
    </div>
  );
};

export default Tarjetapizza;