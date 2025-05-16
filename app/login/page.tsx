'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) router.push('/dashboard');
  };

  return (
    <div className='p-4'>
      <h2>Login</h2>
      <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className='border p-2 mb-2 block' />
      <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className='border p-2 mb-2 block' />
      <button onClick={handleLogin} className='bg-blue-500 text-white px-4 py-2'>Login</button>
    </div>
  );
}