import axios from 'axios';

// Creamos una "instancia" personalizada de Axios
const api = axios.create({
  // Reemplaza con la URL de tu servidor Express (ej: http://localhost:5000)
  baseURL: 'http://localhost:5000/api', 
  
  // Tiempo de espera para la petición (opcional)
  timeout: 10000, 
  
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

/**
 * OPCIONAL: Interceptores
 * Son muy útiles para añadir el token de autenticación 
 * automáticamente en cada petición si luego decides agregar login.
 */
api.interceptors.request.use(
  (config) => {
    // Si tienes un token en el localStorage, lo añadimos aquí
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;