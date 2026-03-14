import React, { useState, useEffect } from 'react';
import api from '../api/axios'; // Instancia de Axios configurada
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        //To implenment the backend, change this to: const response = await api.get('/productos');
        const response = await api.get('/productos');
        setProductos(response.data);
      } catch (err) {
        console.error("Error cargando productos:", err);
        setError("No pudimos cargar los productos. Intenta más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  if (error) return (
    <div className="text-center py-20 text-red-500 font-medium">{error}</div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-16">
      <span className="text-aureo-gold font-bold tracking-[0.2em] uppercase text-xs">Colección 2026</span>
      <h1 className="text-5xl md:text-6xl mt-4 font-black">Calzado de Autor</h1>
      <div className="w-24 h-1 bg-aureo-gold mx-auto mt-6"></div>
    </header>

      {/* responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {productos.map((prod) => (
          <ProductCard key={prod.id} producto={prod} />
        ))}
      </div>
      
      {productos.length === 0 && (
        <p className="text-center py-10 text-slate-400">No hay productos disponibles en este momento.</p>
      )}
    </section>
  );
};

export default Catalog;