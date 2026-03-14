import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const ProductCard = ({ producto }) => {
  const { addToCart } = useCart(); 
  return (
    <div className="group relative bg-white border border-slate-100 p-4 transition-all duration-500 hover:border-aureo-gold/30">
  <div className="overflow-hidden bg-slate-50 aspect-[4/5]">
    <img 
      src={producto.imagen} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
    />
  </div>
  
  <div className="mt-6 text-center">
    <h3 className="text-lg font-medium tracking-tight group-hover:text-aureo-gold transition-colors">
      {producto.nombre}
    </h3>
    <p className="text-aureo-gold font-bold mt-2">
      ${producto.precio.toLocaleString()} USD
    </p>
    
    {/* Botón Minimalista */}
    <button className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 border-b border-aureo-dark text-xs font-bold uppercase tracking-widest pb-1 hover:text-aureo-gold hover:border-aureo-gold">
      Explorar Pieza
    </button>

    
     <button onClick={() => addToCart(producto)}>
          Añadir al Carrito
      </button>
    
  </div>
</div>
  );
};

export default ProductCard;