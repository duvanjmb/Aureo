import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          correo: formData.email,
          clave: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Usuario registrado con éxito", data.message);
        navigate('/login'); 
      } else {
        setError(data.message || 'Error al registrar usuario');
      }
    } catch (err) {
      console.error("Error:", err);
      setError('No se pudo conectar con el servidor');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-aureo-cream px-6 py-12">
      <div className="max-w-md w-full bg-white p-10 border border-slate-100 shadow-sm">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold">Crear Cuenta</h2>
          <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest">Únete a la experiencia Aureo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Nombre Completo</label>
            <input 
              type="text" 
              className="w-full border-b border-slate-300 py-2 text-black focus:border-aureo-gold outline-none bg-transparent"
              placeholder='Nombre completo'
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email</label>
            <input 
              type="email" 
              className="w-full border-b border-slate-300 py-2 text-black focus:border-aureo-gold outline-none bg-transparent"
              placeholder='Ingresa tu email'
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Contraseña</label>
            <input 
              type="password" 
              className="w-full border-b border-slate-300 py-2 text-black focus:border-aureo-gold outline-none bg-transparent"
              placeholder='Ingresa contraseña segura'
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          <button className="w-full bg-aureo-gold text-aureo-dark py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-aureo-gold border border-aureo-gold transition-all">
            Crear Cuenta
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          ¿Ya eres miembro?{' '}
          <Link to="/login" className="text-aureo-dark font-bold hover:underline">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;