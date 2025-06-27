import { useState } from 'react';
import { pizzaCart } from '../data/pizzas';

const CartPizza = () => {
  const [cart, setCart] = useState(pizzaCart)
  const cantidadPizza = (id, variacion) => {setCart(prev => prev.map(pizza =>pizza.id === id ? { ...pizza, count: pizza.count + variacion } : pizza).filter(pizza => pizza.count > 0))}
  const total = cart.reduce((guardado, pizza) => guardado + pizza.price * pizza.count, 0)

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Detalles del pedido:</h2>

      {cart.length ? (<section>{cart.map(({ id, img, name, price, count }) => (
            <div key={id} className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={img}
                  alt={name}
                  style={{
                    width: 50,
                    height: 50,
                    objectFit: 'cover',
                    borderRadius: 5,
                  }}/>
                <span className="fw-bold text-capitalize">{name}</span>
                <span>${price}</span>
              </div>

              <div className="d-flex align-items-center gap-2">

                <button className="btn btn-outline-danger btn-sm" onClick={() => cantidadPizza(id, -1)}>
                  -
                </button>

                <span className="fw-bold">{count}</span>

                <button className="btn btn-outline-primary btn-sm" onClick={() => cantidadPizza(id, 1)}>
                  +
                </button>
              </div>
            </div> ))}

          <div className="text-start mt-4 mb-4">
            <h4>Total: ${total}</h4>
            <button className="btn btn-dark mt-2">Pagar</button>
          </div>
        </section>
      ) : (
        <p className="text-center">Y si agregamos unas pizzitas?🍕</p>
      )}
    </div>
  )
}

export default CartPizza;