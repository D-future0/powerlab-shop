import { useCart } from '../context/CartContext'

export default function cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, totalPrice } = useCart()

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

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
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <button onClick={() => decreaseQty(item.id)} className="px-2 bg-gray-200 rounded">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)} className="px-2 bg-gray-200 rounded">+</button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>
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

          <div className="mt-6 text-right text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  )
}
