import { createContext, useState, useContext } from 'react';

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const agregarCarro = (pizza) => {
    setCart(prev => { 
        const total = prev.find(item => item.id === pizza.id)
      if (total) {
        return prev.map(item => item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        )
      } else {
        return [...prev, { ...pizza, count: 1 }]
      }
    })
  }

  const RemoverCarro = (id) => {
    setCart(prev =>
      prev.map(item => item.id === id ? { ...item, count: item.count - 1 } : item).filter(item => item.count > 0)
    )
  }

  const total = cart.reduce((guardado, item) => guardado + item.price * item.count, 0);

  return (
    <CartContext.Provider value={{ cart, agregarCarro, RemoverCarro, total }}>
      {children}
    </CartContext.Provider>
  );
};