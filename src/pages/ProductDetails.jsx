import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck } from 'lucide-react';
import api from '../api/axios';

const ProductDetail = () => {
  const { id } = useParams(); // Grabs the ID from the URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await api.get(`/productos/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  if (loading) return <div className="p-20 text-center">Cargando...</div>;
  if (!product) return <div className="p-20 text-center">Producto no encontrado</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" /> Volver al catálogo
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Gallery Section */}
        <div className="rounded-2xl overflow-hidden bg-slate-50">
          <img src={product.imagen} alt={product.nombre} className="w-full h-full object-cover" />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            {product.categoria}
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2">{product.nombre}</h1>
          <p className="text-2xl font-bold text-slate-900 mt-4">${product.precio.toLocaleString()}</p>
          
          <div className="mt-6 text-slate-600 leading-relaxed">
            <p>{product.descripcion}</p>
          </div>

          <button className="mt-8 bg-blue-600 text-white py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            <ShoppingCart size={22} /> Añadir al carrito
          </button>

          {/* Trust Badges (Makes it look professional) */}
          <div className="mt-10 grid grid-cols-2 gap-4 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Truck className="text-blue-600" size={24} />
              <span>Envío nacional<br/><strong>Gratis</strong></span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <ShieldCheck className="text-blue-600" size={24} />
              <span>Compra 100%<br/><strong>Segura</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;