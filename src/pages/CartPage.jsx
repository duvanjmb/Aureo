import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight } from 'lucide-react';

const CartPage = () => {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-display font-bold mb-10">Tu Selección Aureo</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-slate-200 rounded-xl">
          <p className="text-slate-500">Tu carrito está vacío.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-6">
              <div className="flex items-center gap-4">
                <img src={item.imagen} className="w-20 h-20 object-cover rounded-lg" alt={item.nombre} />
                <div>
                  <h3 className="font-bold">{item.nombre}</h3>
                  <p className="text-sm text-slate-500">Cantidad: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-bold">${(item.precio * item.quantity).toLocaleString()}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          
          <div className="pt-10 flex justify-between items-center text-2xl font-bold">
            <span>Total</span>
            <span className="text-aureo-gold">${cartTotal.toLocaleString()}</span>
          </div>
          
          <button className="w-full bg-aureo-dark text-white py-4 mt-8 flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
            Finalizar Pedido <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;