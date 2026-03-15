// src/components/Footer.jsx
import { Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-aureo-dark text-white pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand*/}
        <div className="space-y-4">
          <h2 className="text-2xl font-display font-black tracking-tighter">
            AUREO <span className="text-aureo-gold font-light">STORE</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Elevando el calzado artesanal a un estándar de lujo. Diseñado en Colombia para el mundo.
          </p>
        </div>

        {/* Linksd */}
        <div>
          <h3 className="text-aureo-gold font-bold uppercase text-xs tracking-widest mb-6">Explorar</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="/tienda" className="hover:text-white transition-colors">Catálogo</a></li>
            <li><a href="/nosotros" className="hover:text-white transition-colors">Nuestra Historia</a></li>
            <li><a href="/login" className="hover:text-white transition-colors">Mi Cuenta</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-aureo-gold font-bold uppercase text-xs tracking-widest mb-6">Contacto</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><MapPin size={14} /> Barranquilla, Colombia</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +57 (300) 123-4567</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-aureo-gold font-bold uppercase text-xs tracking-widest mb-6">Siguenos</h3>
          <div className="flex gap-4">
            <Instagram className="cursor-pointer hover:text-aureo-gold transition-colors" />
            <Facebook className="cursor-pointer hover:text-aureo-gold transition-colors" />
            <Twitter className="cursor-pointer hover:text-aureo-gold transition-colors" />
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-500 uppercase tracking-widest">
        © 2026 Aureo Store - Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;