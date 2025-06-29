import { useCart } from '../../context/CartContext'
// This component renders a single product card.
// It displays the product image, name, description, price, and an "Add to Cart" button.

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-3" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

