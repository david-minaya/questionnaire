import Link from 'next/link';
import { getQuestionnaires } from '@/actions/getQuestionnaires';
import { getUser } from '@/actions/getUser';
import { Typography, Box, ListItem, List, ListItemIcon } from '@mui/material';
import { redirect } from 'next/navigation';
import { ArticleOutlined } from '@mui/icons-material';

export const dynamic = 'force-dynamic'

export default async function User() {

  const user = await getUser();
  const questionnaries = await getQuestionnaires();

  console.log(questionnaries)

  if (user.role != 'user') redirect('/');

  return (
    <Box>
      <Typography variant="h5">
        Questionnaries
      </Typography>
      <List sx={{ marginTop: '12px' }}>
        {questionnaries.map(questionnarie => (
          <ListItem 
            key={questionnarie.id} 
            sx={{ 
              border: '1px solid lightgray',
              '&:not(:last-of-type)': {
                borderBottom: 'none'
              },
              '&:first-of-type': {
                borderRadius: '4px 4px 0px 0px'
              },
              '&:last-of-type': {
                borderRadius: '0px 0px 4px 4px'
              }
            }}>
            <ListItemIcon>
              <ArticleOutlined/>
            </ListItemIcon>
            <Box flexGrow={1}>
              <Link href={`/user/questionnaires/${questionnarie.id}`}>
                <Typography 
                  variant='body1' 
                  color='primary'
                  fontWeight={500}
                  sx={{
                    cursor: 'pointer'
                  }}>
                  {questionnarie.title}
                </Typography>
              </Link>
            </Box>
            {!!questionnarie.questionnaireAnswers?.length &&
              <Typography 
                variant='body2' 
                color='green'
                fontWeight={500}
                sx={{
                  cursor: 'pointer'
                }}>
                Submited  
              </Typography>
            }
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
