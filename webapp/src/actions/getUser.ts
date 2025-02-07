import { User } from '@/types/user';
import { cookies } from 'next/headers';

export async function getUser() {    
  const cookieStore = await cookies();
  const userCookie = cookieStore.get('user');
  return userCookie ? JSON.parse(userCookie.value) as User : undefined;
}
