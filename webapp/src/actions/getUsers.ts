import { User } from '@/types/user';
import { api } from '@/utils/axiosInstance';

export async function getUsers() {    
  const res = await api.get<User[]>('/admins/users');
  return res.data;
}
