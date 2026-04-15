import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name)
      if (existing) return prev.map(i => i.name === item.name ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...item, qty: 1 }]
    })
  }
  const removeItem = (itemName) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === itemName)
      if (!existing) return prev
      if (existing.qty === 1) return prev.filter(i => i.name !== itemName)
      return prev.map(i => i.name === itemName ? { ...i, qty: i.qty - 1 } : i)
    })
  }
  const clearCart = () => setCart([])

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0)
  const totalPrice = cart.reduce((sum, i) => {
    const price = parseFloat(i.price.replace(/[^0-9.]/g, '')) || 0
    return sum + price * i.qty
  }, 0)

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)