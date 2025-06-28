import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [alert, setAlert] = useState(null)
  const [coupon, setCoupon] = useState('')
const [discount, setDiscount] = useState(0)
const [couponError, setCouponError] = useState(null)

// Define a valid coupon code regex
const validCouponCode = /^POWERLABSx$/

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('cart')
    if (stored) setCartItems(JSON.parse(stored))
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const showAlert = (type, message) => {
    setAlert({ type, message })
    setTimeout(() => setAlert(null), 2500)
  }

  const addToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id)
    if (existing) {
      // Increase quantity
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
      showAlert('success', 'Increased quantity')
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
      showAlert('success', 'Item added to cart!')
    }
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
    showAlert('error', 'Item removed from cart')
  }

  const increaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  const decreaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    ))
  }
// Calculate total items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
// Calculate subtotal and discounted total
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
const discountedTotal = subtotal * (1 - discount)


  // Apply coupon logic
  const applyCoupon = (code) => {
  if (!validCouponCode.test(code)) {
    setCouponError('Invalid coupon code')
    setDiscount(0)
    return
  }

  setCoupon(code)
  setDiscount(0.132) // 13.2%
  setCouponError(null)
  showAlert('success', 'Coupon applied: 13.2% discount')
}

  return (
    <CartContext.Provider value={{
      cartItems,
addToCart,
removeFromCart,
increaseQty,
decreaseQty,
totalItems,
subtotal,
discountedTotal,
coupon,
applyCoupon,
couponError,
alert,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
