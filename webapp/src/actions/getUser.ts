import { User } from '@/types/user';
import { api } from '@/utils/axiosInstance';

export async function getUser() {    
  const res = await api.get<User>('/auth/user');
  return res.data;
}
