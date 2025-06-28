import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function CartPage() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    subtotal,
    discountedTotal,
    applyCoupon,
    couponError,
    coupon
  } = useCart()

  const [inputCode, setInputCode] = useState('')

  const handleApply = (e) => {
    e.preventDefault()
    applyCoupon(inputCode.trim())
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="bg-white p-4 rounded shadow flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <button onClick={() => decreaseQty(item.id)} className="px-2 bg-gray-200 rounded">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)} className="px-2 bg-gray-200 rounded">+</button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Coupon Section */}
          <form onSubmit={handleApply} className="mt-6">
            <label className="block text-sm font-medium mb-1">Coupon Code:</label>
            <div className="flex space-x-2">
              <input
                value={inputCode}
                onChange={e => setInputCode(e.target.value)}
                className="border px-3 py-1 rounded w-full"
                placeholder="Enter coupon code"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              >
                Apply
              </button>
            </div>
            {couponError && (
              <p className="text-red-600 text-sm mt-1">{couponError}</p>
            )}
            {coupon && !couponError && (
              <p className="text-green-600 text-sm mt-1">{coupon} applied</p>
            )}
          </form>

          {/* Totals */}
          <div className="mt-6 text-right space-y-2">
            <p>Subtotal: <span className="font-semibold">${subtotal.toFixed(2)}</span></p>
            {coupon && !couponError && (
              <p className="text-green-600">Discount: 13.2%</p>
            )}
            <p className="text-xl font-bold">Total: ${discountedTotal.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  )
}
