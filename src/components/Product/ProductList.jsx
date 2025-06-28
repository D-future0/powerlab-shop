import { products } from '../../products'
import ProductCard from './ProductCard'

function ProductList() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">🛍️ Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
export default ProductList
// This component renders a list of products using the ProductCard component.
// It maps through the products array imported from products.json and displays each product card.