import Link from 'next/link';
import { getQuestionnaires } from '@/actions/getQuestionnaires';
import { Typography, Box, ListItem, List, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import { ArticleOutlined } from '@mui/icons-material';

export const dynamic = 'force-dynamic'

export default async function User() {

  const questionnaries = await getQuestionnaires();

  return (
    <Box>
      <Typography variant="h5">
        Questionnaries
      </Typography>
      <List sx={{ marginTop: '24px' }}>
        {questionnaries.map(questionnarie => (
          <Box 
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
              },
              "a": {
                textDecoration: 'none',
                color: 'gray'
              }
            }}>
            <Link
              href={`/user/questionnaires/${questionnarie.id}`}>
              <ListItemButton>
                <ListItem>
                  <ListItemIcon>
                    <ArticleOutlined/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={questionnarie.title} 
                    slotProps={{ 
                      primary: {
                        color: 'primary',
                        fontWeight: 'bold'
                      }
                    }}/>
                  {!!questionnarie.questionnaireAnswers?.length &&
                    <Typography 
                      variant='body2' 
                      color='green'
                      fontWeight={500}>
                      Submited  
                    </Typography>
                  }
                </ListItem>
              </ListItemButton>
            </Link>
          </Box>
        ))}
      </List>
    </Box>
  );
}
