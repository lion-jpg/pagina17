// GoogleSignIn.js
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../api/firebase.config'; // Asegúrate de ajustar la ruta a tu archivo firebase.js
import { useNavigate } from 'react-router-dom';
import logoogle from '../assets/logoogle.png';
const GoogleSignIn = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // La información del usuario está disponible en result.user
      console.log('Usuario:', result.user);
      navigate('/login/guia2');
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
    }
  };

  return (
    <div className='flex bg-gray-400 rounded-lg'>
      <img className="h-6 w-6" src={logoogle} alt=""  />
      <button onClick={handleLogin}>Iniciar sesión con Googleeee</button>
    </div>
  );
};

export default GoogleSignIn;
