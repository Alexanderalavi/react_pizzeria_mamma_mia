import React from 'react'

const Tarjetapizza = (props) => {
  return (
    <div className="card" style={{ width: '32rem' }}>
      <img src={props.imagen} class="card-img-top" alt={props.alternativo} />
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <hr className="linea" />
        <section className="ingredientes">
        <p>Ingredientes:</p>
        <p>🍕{props.ingredientes.join(" , ")}</p>
        </section>
         <hr className="linea" /> 
         <h5 className="precio">Precio: ${props.precio}</h5>
        <div className="botoneria">
            <button type="button" className="btn btn-outline-dark">Ver Más 👀</button>
            <button type="button" className="btn btn-dark">añadir🛒</button>

        </div>
      </div>
    </div>
  );
};

export default Tarjetapizza;