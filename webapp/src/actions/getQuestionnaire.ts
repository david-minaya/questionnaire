import { Questionnaire } from '@/types/questionnaire';
import { api } from '@/utils/axiosInstance';

export async function getQuestionnaire(id: number) {    
  const res = await api.get<Questionnaire>(`/users/questionnaires/${id}`);
  return res.data;
}
