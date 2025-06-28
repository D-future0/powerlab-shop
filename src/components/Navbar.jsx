import { FaShoppingCart, FaHome, FaStore } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useCart } from '../context/CartContext'

const Navbar = () => {
    const { totalItems } = useCart()
  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Right Side Logo  */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl sm:text-2xl font-bold text-blue-600 hover:text-blue-800">
            PowerLab
          </Link>
          
          </div>
        {/* Left Side: Home and Cart */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-1 text-white hover:text-blue-600">
          <FaStore size={28}/>
            <span className="hidden sm:inline">Store</span>
          </Link>
          <Link to="/cart" className="flex items-center space-x-1 text-text-white hover:text-blue-600">
          <span className='relative'>
            <FaShoppingCart size={28}/>
          {totalItems > 0 && (
            <span className="bg-red-500 text-gray-900 text-xs rounded-full px-1 absolute -top-2 right-1">
              {totalItems}
            </span>
          )}
          </span>
          <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
        </div>
        </nav>
  )
}

export default Navbar