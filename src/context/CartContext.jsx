import { createContext, useState, useContext } from 'react';

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [carro, setCarro] = useState([])

  const agregarCarro = (pizza) => {
    setCarro(prev => {
      const existe = prev.find(item => item.id === pizza.id)
      if (existe) {
        return prev.map(item => item.id === pizza.id ? { ...item, count: item.count + 1 } : item)
      } else {
        return [...prev, { ...pizza, count: 1 }]
      }
    })
  }

  const RemoverCarro = (id) => {
    setCarro(prev =>prev.map(item => item.id === id ? { ...item, count: item.count - 1 } : item).filter(item => item.count > 0)
    )
  }

  const suma = carro.reduce((guardado, item) => guardado + item.price * item.count, 0)

  return (
    <CartContext.Provider value={{ carro, agregarCarro, RemoverCarro, suma }}>
      {children}
    </CartContext.Provider>
  )
}