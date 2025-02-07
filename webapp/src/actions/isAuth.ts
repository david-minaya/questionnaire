import { User } from '@/types/user';
import { api } from '@/utils/axiosInstance';

export async function isAuth() {  
  const res = await api.get<User>('/auth/user', { validateStatus: () => true }); 
  return res.status === 200 && res.data?.role != undefined
}
