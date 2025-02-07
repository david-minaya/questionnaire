"use server";

import { api } from '@/utils/axiosInstance';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(prevState: string | null, formData: FormData): Promise<string | null> {

  const res = await api.post('/auth/login', { 
    username: formData.get('username'),
    password: formData.get('password')
  });

  if (res.status !== 200) {
    console.log('login error ->', res.data);
    return 'Error login user'
  }

  const cookieHeader = res.headers['set-cookie']?.[0] || '';
  const cookieStore = await cookies();
  cookieStore.set('session', cookieHeader);

  redirect('/');
}
