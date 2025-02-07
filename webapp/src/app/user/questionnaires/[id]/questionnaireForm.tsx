'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';
import { Questionnaire } from '@/types/questionnaire';
import { submitQuestionnaire } from '@/actions/submitQuestionnaire';

import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  CardHeader, 
  Checkbox, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  TextField, 
  Typography
} from '@mui/material';

interface Props {
  questionnaire: Questionnaire
}

export function QuestionnaireForm(props: Props) {

  const { questionnaire } = props;

  const [error, setError] = useState(false);
  const [formState, setFormState] = useState(mapQuestionnaire())

  function mapQuestionnaire() {
    return questionnaire.questionnaireQuestions?.map(qq => ({      
      id: qq.question.id,
      title: qq.question.title,
      type: qq.question.type,
      answerId: qq.question.answers?.[0]?.id,
      invalid: false,
      value: qq.question.answers?.[0]?.value || '',
      options: qq.question.options?.map(option => ({
        id: option.id,
        title: option.title,
        value: qq.question.answers?.at(-1)?.answerOptions?.some(ansOption => 
          ansOption.option?.id === option.id
        ) || false
      }))
    }))
  }

  function updateQuestionValue(id: number, value: string) {
    setFormState(state => state?.map(question => ({
      ...question,
      value: question.id === id ? value : question.value,
    })));
  }

  function checkQuestionOption(id: number, optionId: number, value: boolean) {
    setFormState(state => state?.map(question => ({
      ...question,
      options: question.options?.map(option => ({
        ...option,
        value: question.id === id && option.id === optionId ? value : option.value
      }))
    })));
  }

  function setInvalidQuestion(id: number, value: boolean) {
    setFormState(state => state?.map(question => ({
      ...question,
      invalid: question.id === id ? value : question.invalid,
    })));
  }

  async function handleSubmit() {

    let isInvalid = false;

    for (const question of formState || []) {

      isInvalid = question.type === 'input'
        ? question.value === ''
        : question.options?.every(option => option.value === false) || false

      setInvalidQuestion(question.id, isInvalid);
    }

    if (isInvalid) {
      return;
    }

    setError(false);

    const res = await submitQuestionnaire({
      questionnaireId: questionnaire.id,
      answers: formState!.map(question => ({
        questionId: question.id,
        answerId: question.answerId,
        value: question.value !== '' ? question.value : undefined,
        options: question.options
          ?.filter(option => option.value)
          .map(option => ({ id: option.id }))
      }))
    })

    if (res.status !== 200) {
      setError(true);
      return;
    }

    redirect('/user')
  }

  return (
    <Box sx={{ paddingX: '40px' }}>
        {formState?.map(question => (
          <Card key={question.id} sx={{ margin: '24px' }}>
            <CardHeader 
              title={question.title}
              slotProps={{ title: { variant: 'h6' }}}/>
            <CardContent>
              {question.type === 'input' &&
                <TextField 
                  size='small'
                  sx={{ width: '600px' }}
                  value={question.value}
                  disabled={question.answerId != undefined }
                  onChange={e => updateQuestionValue(question.id, e.target.value)}/>
              }
              {question.type === 'mcq' &&
                <List>
                  {question.options?.map((option) => (  
                    <ListItem
                      key={option.id}
                      disablePadding>
                      <ListItemButton 
                        role={undefined} 
                        dense
                        disabled={question.answerId != undefined }
                        onClick={() => checkQuestionOption(question.id, option.id, !option.value)}>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            tabIndex={-1}
                            checked={option.value}
                            disabled={question.answerId != undefined}/>
                        </ListItemIcon>
                        <ListItemText primary={option.title}/>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              }
              {question.invalid && 
                <Typography 
                  variant='body1'
                  color='error'
                  fontWeight={500}>
                  Invalid answer*
                </Typography>
              }
            </CardContent>
          </Card>
        ))}
        {error && 
          <Typography 
            variant='body1'
            color='error'
            fontWeight={500}
            sx={{ margin: '12px 24px' }}>
            Error submiting questionnaire
          </Typography>
        }
        <Button
          size='large'
          variant='contained'
          disabled={!!questionnaire.questionnaireAnswers?.length}
          onClick={handleSubmit}
          sx={{
            display: 'block',
            width: '140px',
            marginLeft: 'auto',
            marginRight: '24px'
          }}>
          Submit
        </Button>
      </Box>
  )
}