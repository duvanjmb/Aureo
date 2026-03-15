// 1. Import components and pages
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetails';
import { CartProvider } from './context/CartContext'; // Importa el proveedor del carrito1
import AboutUs from './pages/AboutUs';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext'; // Importa el proveedor de autenticación
import Footer from './components/Footer';


function App() {
  return (
    <AuthProvider>
    <CartProvider>
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Catalog />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
        </Routes>
        <Footer />
      </main>

      <footer className="p-10 bg-slate-50 text-center text-slate-400">
        © 2026 Aureo Store
      </footer>
    </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;