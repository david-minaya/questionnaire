import axios from 'axios';
import { cookies } from 'next/headers';

export const api = axios.create({
  baseURL: process.env.API
});

api.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  config.headers.cookie = cookieStore.get('session')?.value;
  return config;
});
