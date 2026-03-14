import React from 'react';

const AboutUs = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <span className="text-aureo-gold font-bold uppercase tracking-widest text-sm">Nuestra Esencia</span>
      <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 text-slate-900">Sobre Aureo</h1>
      <div className="w-16 h-1 bg-aureo-gold mx-auto mt-6"></div>
      
      <div className="mt-12 text-lg text-slate-600 leading-relaxed space-y-6 text-justify">
        <p>
          Fundada con la visión de fusionar la artesanía tradicional con el diseño contemporáneo, 
          <strong> Aureo Store</strong> nace para quienes entienden que el calzado es la base de la elegancia.
        </p>
        <p>
          Cada pieza en nuestra colección es seleccionada minuciosamente, priorizando materiales 
          nobles y procesos éticos de fabricación en Colombia. No vendemos solo zapatos; 
          ofrecemos una experiencia de distinción en cada paso.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;