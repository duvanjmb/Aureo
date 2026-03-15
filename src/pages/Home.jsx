import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';
import Catalog from './Catalog';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-aureo-dark">
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop" 
            alt="Calzado de lujo" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-aureo-dark via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-aureo-gold font-bold tracking-[0.4em] uppercase text-sm fade-in-up">
            Artesanía en cada paso
          </span>
          <h1 className="text-5xl md:text-8xl font-display text-white mt-6 leading-tight">
            Eleva tu <span className="italic text-aureo-gold">Caminar</span>
          </h1>
          <p className="text-slate-300 mt-8 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Descubre la colección Aureo 2026. Donde el diseño de vanguardia se encuentra con la comodidad absoluta.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/tienda" 
              className="bg-aureo-gold text-aureo-dark px-10 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-white transition-all duration-300"
            >
              Ver Catálogo
            </Link>
            <Link 
              to="/nosotros" 
              className="border border-white text-white px-10 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-white hover:text-aureo-dark transition-all duration-300"
            >
              Nuestra Historia
            </Link>
          </div>
        </div>
      </section>

      {/* Aureo Values */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-aureo-cream rounded-full flex items-center justify-center mb-6 text-aureo-gold">
              <Star size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Calidad Premium</h3>
            <p className="text-slate-500">Materiales seleccionados a mano por expertos artesanos.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-aureo-cream rounded-full flex items-center justify-center mb-6 text-aureo-gold">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Garantía Aureo</h3>
            <p className="text-slate-500">2 años de protección en todas tus piezas de calzado.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-aureo-cream rounded-full flex items-center justify-center mb-6 text-aureo-gold">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Envío Prioritario</h3>
            <p className="text-slate-500">Entrega rápida y segura en cualquier lugar de Colombia.</p>
          </div>
        </div>
      </section>

      {/* Categories/working */}
      <section className="py-24 bg-aureo-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold">Explora por Estilo</h2>
              <div className="w-20 h-1 bg-aureo-gold mt-4"></div>
            </div>
            <Link to="/" className="text-aureo-gold font-bold flex items-center gap-2 mt-4 md:mt-0 hover:gap-4 transition-all">
              Ir a la tienda <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1 */}
            <div className="relative h-96 group overflow-hidden cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1930&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10">
                <h4 className="text-white text-3xl font-display italic">Formal & Etiqueta</h4>
                <p className="text-slate-200 mt-2">Perfección para tus momentos clave.</p>
              </div>
            </div>
            {/* Category 2 */}
            <div className="relative h-96 group overflow-hidden cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10">
                <h4 className="text-white text-3xl font-display italic">Urban Premium</h4>
                <p className="text-slate-200 mt-2">Estilo diario sin comprometer la elegancia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;