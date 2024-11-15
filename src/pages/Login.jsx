import React from 'react';
import GoogleSignIn from '../components/GoogleSignIn';

const Login = ({ user }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full overflow-auto">
        <h1 className='text-center text-3xl font-bold mb-6 text-gray-800'>
         Registrarse
        </h1>
       
        <GoogleSignIn />
      </div>
    </div>
  );
}

export default Login;
