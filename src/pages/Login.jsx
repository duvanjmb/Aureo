import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import { useNavigate } from "react-router";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(null);
  const { login } = useAuth(); 
  const navigate = useNavigate();


  const handleSubmit = async (e) => { 
  e.preventDefault();
  setError('');

  try {
    const response = await fetch(`http://localhost:3000/login?correo=${email}&clave=${password}`);

    if (response.ok) {
      const data = await response.json(); 
      
      
      login({ 
        nombre: data.nombre || "Usuario",
        email: email,
        rol: data.rol || "cliente" 
      });

      console.log("Sesión iniciada con éxito");
      navigate('/'); 
    } else {
      setError('Credenciales incorrectas o usuario no encontrado');
    }
  } catch (err) {
    console.error("Error en la conexión:", err);
    setError('No se pudo conectar con el servidor');
  }
};

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-aureo-cream px-6">
      <div className="max-w-md w-full bg-white p-10 border border-slate-100 shadow-sm">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold">Bienvenido</h2>
          <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest">Ingresa a tu cuenta Aureo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email</label>
            <input 
              type="email" 
              className="w-full border-b border-slate-300 py-2 focus:border-aureo-gold outline-none transition-colors bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">Contraseña</label>
            <input 
              type="password" 
              className="w-full border-b border-slate-300 py-2 focus:border-aureo-gold outline-none transition-colors bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="w-full bg-aureo-dark text-white py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-slate-800 transition-all">
            Iniciar Sesión
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          ¿No tienes cuenta?{' '}
          <Link to="/registro" className="text-aureo-gold font-bold hover:underline">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
