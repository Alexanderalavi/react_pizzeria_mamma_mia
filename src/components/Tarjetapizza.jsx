import React from 'react'

const Tarjetapizza = (props) => {
  return (
    <div class="card" style={{ width: '32rem' }}>
      <img src={props.imagen} class="card-img-top" alt={props.alternativo} />
      <div class="card-body">
        <h5 class="card-title">{props.nombre}</h5>
        <hr class="linea" />
        <section class="ingredientes">
        <p>Ingredientes:</p>
        <p>🍕{props.ingredientes.join(" , ")}</p>
        </section>
         <hr class="linea" /> 
         <h5 class="precio">Precio: ${props.precio}</h5>
        <div class="botoneria">
            <button type="button" class="btn btn-outline-dark">Ver Más 👀</button>
            <button type="button" class="btn btn-dark">añadir🛒</button>

        </div>
      </div>
    </div>
  );
};

export default Tarjetapizza;