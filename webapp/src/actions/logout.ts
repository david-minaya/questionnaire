"use server";

import { api } from '@/utils/axiosInstance';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {

  const res = await api.post('/auth/logout');

  if (res.status !== 200) {
    return 'Error login user'
  }

  const cookieStore = await cookies();
  cookieStore.delete('session');
  cookieStore.delete('user');

  redirect('/');
}
