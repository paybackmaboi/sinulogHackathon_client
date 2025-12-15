import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', creds);
      if (res.data.success) {
        localStorage.setItem('role', res.data.role); // Store session
        if(res.data.role === 'admin') navigate('/dashboard');
        else navigate('/');
      } else {
        alert("Invalid login");
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 w-96">
        <h2 className="text-2xl font-bold mb-6 text-brand-gold text-center">Owner Login</h2>
        <input 
          className="w-full p-3 mb-4 bg-gray-700 rounded text-white" 
          placeholder="Username" 
          onChange={e => setCreds({...creds, username: e.target.value})} 
        />
        <input 
          type="password"
          className="w-full p-3 mb-6 bg-gray-700 rounded text-white" 
          placeholder="Password" 
          onChange={e => setCreds({...creds, password: e.target.value})} 
        />
        <button className="w-full py-3 bg-brand-gold text-black font-bold rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;