import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import shop from './pages/shop'
import cart from './pages/cart'

function App() {
 

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<shop/>} />
        <Route path="/cart" element={<cart/>} />
      </Routes>
     </Router>
      <Footer/>
    </>
  )
}

export default App
