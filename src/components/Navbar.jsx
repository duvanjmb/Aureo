import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, LogOut, Menu, X } from 'lucide-react'; // iconos
import { useAuth } from '../context/AuthContext'; 
import { useCart } from '../context/CartContext'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const totalItems = cart?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const textColor = isScrolled ? 'text-aureo-dark' : 'text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className={`text-2xl font-display font-black tracking-tighter ${textColor}`}>
          AUREO <span className="text-aureo-gold font-light">STORE</span>
        </Link>

        {/* NAVEGACIÓN CENTRAL */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-xs uppercase tracking-widest font-bold hover:text-aureo-gold ${textColor}`}>Inicio</Link>
          <Link to="/tienda" className={`text-xs uppercase tracking-widest font-bold hover:text-aureo-gold ${textColor}`}>Tienda</Link>
          <Link to="/nosotros" className={`text-xs uppercase tracking-widest font-bold hover:text-aureo-gold ${textColor}`}>Nosotros</Link>
        </div>

        {/* ICONOS DE ACCIÓN (Login y Carrito) */}
        <div className="flex items-center gap-6">
          
          {/* LÓGICA DE LOGIN / USUARIO */}
          {user ? (
            <div className="flex items-center gap-4">
              <span className={`text-[10px] uppercase tracking-widest font-bold hidden sm:block ${textColor}`}>
                Membresía: {user.nombre.split(' ')[0]}
              </span>
              <button 
                onClick={logout}
                className={`${textColor} hover:text-red-500 transition-colors`}
                title="Cerrar Sesión"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className={`${textColor} hover:text-aureo-gold transition-colors flex items-center gap-2`}
            >
              <User size={20} />
              <span className="text-[10px] uppercase tracking-widest font-bold hidden sm:block">Ingresar</span>
            </Link>
          )}

          {/* CARRITO */}
          <Link to="/carrito" className={`relative p-1 hover:text-aureo-gold transition-colors ${textColor}`}>
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-aureo-gold text-aureo-dark text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;