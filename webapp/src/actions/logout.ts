"use server";

import { api } from '@/utils/axiosInstance';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  await api.post('/auth/logout');
  const cookieStore = await cookies();
  cookieStore.delete('session');
  cookieStore.delete('user');
  redirect('/');
}
