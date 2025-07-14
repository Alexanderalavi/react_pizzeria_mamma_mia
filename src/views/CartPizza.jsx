import { useCart } from '../context/CartContext'
import { useUser } from '../context/UserContext'

const CartPizza = () => {
  const { carro, agregarCarro, removerCarro, suma } = useCart()
  const { token } = useUser()

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Detalles del pedido:</h2>

      {carro.length ? (
        <section>
          {carro.map(({ id, img, name, price, count }) => (
            <div key={id} className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
              <div className="d-flex align-items-center gap-3">
                <img src={img} alt={name} style={{width: 50, height: 50, objectFit: 'cover', borderRadius: 5,}} />
                <span className="fw-bold text-capitalize">{name}</span>
                <span>${price}</span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-outline-danger btn-sm" onClick={() => removerCarro(id)}>-</button>
                <span className="fw-bold">{count}</span>
                <button className="btn btn-outline-primary btn-sm" onClick={() => agregarCarro({ id, img, name, price })}>+</button>
              </div>
            </div>
          ))}

          <div className="text-start mt-4 mb-4">
            <h4>Total: ${suma}</h4>
            <button className="btn btn-dark mt-2" disabled={!token}>Pagar</button>
            {!token && <p className="text-danger mt-2">Debes iniciar sesión para pagar.</p>}
          </div>
        </section>
      ) : (
        <p className="text-center">Y si agregamos unas pizzitas?🍕</p>
      )}
    </div>
  )
}

export default CartPizza