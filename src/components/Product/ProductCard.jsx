function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-xl mb-4" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-semibold">${product.price.toFixed(2)}</span>
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">Add to Cart</button>
      </div>
    </div>
  )
}
export default ProductCard
// This component renders a single product card.
// It displays the product image, name, description, price, and an "Add to Cart" button.