"use server";

import { api } from '@/utils/axiosInstance';

interface SubmitQuestionnaireBody {
  questionnaireId: number;
  answers: {
    questionId: number,
    answerId?: number,
    value?: string,
    options?: {
      id: number
    }[]
  }[]
}

export async function submitQuestionnaire(questionnaire: SubmitQuestionnaireBody) {
  const res = await api.post(`/users/questionnaires`, questionnaire);
  return { status: res.status };
}
