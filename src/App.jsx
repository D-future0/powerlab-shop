import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './pages/shop'
import Cart from './pages/cart'

function App() {
 

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
