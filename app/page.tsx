'use client';
import { useAuth } from '../contexts/AuthContext';
import Link from 'next/link';

export default function Home() {
  const auth = useAuth();
  const user = auth?.user;
  return (
    <main className='p-4'>
      <h1 className='text-2xl font-bold'>Welcome {user ? user.email : 'Guest'}</h1>
      <Link href='/dashboard'>Go to Dashboard</Link>
    </main>
  );
}