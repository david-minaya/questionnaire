import { Questionnaire } from '@/types/questionnaire';
import { api } from '@/utils/axiosInstance';

export async function getQuestionnaires() {    
  const res = await api.get<Questionnaire[]>('/users/questionnaires');
  return res.data;
}
