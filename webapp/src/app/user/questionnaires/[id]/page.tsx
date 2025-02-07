import Link from 'next/link';
import { ArrowBack } from '@mui/icons-material';
import { getQuestionnaire } from '@/actions/getQuestionnaire'
import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import { QuestionnaireForm } from './questionnaireForm';

interface Props {
  params: Promise<{ id: number }>
}

export default async function Questionnarie(props: Props) {

  const { params } = props;

  const id = (await params).id;
  const questionnarie = await getQuestionnaire(id);

  return (
    <Box>
      <Toolbar sx={{ gap: '12px' }}>
        <Link href='/user'>
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          {questionnarie.title}
        </Typography>
        {!!questionnarie.questionnaireAnswers?.length &&
          <Typography variant="h6" color='green'>
            Questionnaire submited
          </Typography>
        }
      </Toolbar>
      <QuestionnaireForm questionnaire={questionnarie}/>
    </Box>
  )
}
