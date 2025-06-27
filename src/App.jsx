import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
     </Router>
     <footer className="w-full text-center p-4 bg-gray-800 text-white">
        <p>© 2023 My App</p>
      </footer>
    </>
  )
}

export default App
