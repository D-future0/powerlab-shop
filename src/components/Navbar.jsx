import { FaShoppingCart, FaHome } from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Right Side Logo  */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-800">
            PowerLab
          </Link>
          
          </div>
        {/* Left Side: Home and Cart */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-1 text-white hover:text-blue-600">
          <FaHome />
            <span className="hidden sm:inline">Shop</span>
          </Link>
          <Link to="/cart" className="flex items-center space-x-1 text-text-white hover:text-blue-600">
            <FaShoppingCart />
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
        </div>
        </nav>
  )
}

export default Navbar