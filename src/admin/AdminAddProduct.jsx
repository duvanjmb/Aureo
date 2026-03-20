import React, { useState } from 'react';

const AdminAddProduct = () => {
  const [product, setProduct] = useState({
    nombre: '', precio: '', imagen: '', descripcion: '', stock: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/productos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });

      const data = await response.json();
      if (response.ok) {
        alert("¡Producto añadido con éxito!");
        setProduct({ nombre: '', precio: '', imagen: '', descripcion: '', stock: '' });
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white border border-slate-200 shadow-lg">
      <h2 className="text-2xl font-display font-bold mb-6 text-center">Nuevo Calzado Aureo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" placeholder="Nombre del modelo" 
          className="w-full border-b border-slate-300 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-aureo-gold bg-transparent transition-colors"
          value={product.nombre}
          onChange={(e) => setProduct({...product, nombre: e.target.value})}
          required 
        />
        <input 
          type="number" placeholder="Precio (COP)" 
          className="w-full border-b border-slate-300 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-aureo-gold bg-transparent transition-colors"
          value={product.precio}
          onChange={(e) => setProduct({...product, precio: e.target.value})}
          required 
        />
        <input 
          type="text" placeholder="URL de la imagen" 
          className="w-full border-b border-slate-300 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-aureo-gold bg-transparent transition-colors"
          value={product.imagen}
          onChange={(e) => setProduct({...product, imagen: e.target.value})}
          required 
        />
        <textarea 
          placeholder="Descripción de lujo" 
          className="w-full border-b border-slate-300 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-aureo-gold bg-transparent transition-colors"
          value={product.descripcion}
          onChange={(e) => setProduct({...product, descripcion: e.target.value})}
        />
        <button type="submit" className="w-full bg-aureo-dark text-white py-3 hover:bg-aureo-gold transition-colors font-bold uppercase tracking-widest text-xs">
          Publicar en Catálogo
        </button>
      </form>
    </div>
  );
};

export default AdminAddProduct;