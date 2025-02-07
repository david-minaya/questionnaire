import { User } from '@/types/user';
import { Close, ExpandMore } from '@mui/icons-material';

import { 
  Accordion, 
  AccordionDetails, 
  AccordionSummary, 
  Box, 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  IconButton, 
  Typography 
} from '@mui/material';

interface Props {
  open: boolean;
  user: User;
  onClose: () => void;
}

export function UserDialog(props: Props) {

  const {
    open,
    user,
    onClose
  } = props;

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth='md'
      onClose={onClose}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {user.name}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <Close />
      </IconButton>
      <DialogContent dividers>
        <Box minHeight='280px'>
          <Typography
            fontSize='20px'
            marginBottom='12px'>
            Questionnaires
          </Typography>
          {!user.questionnaireAnswers || user.questionnaireAnswers.length === 0 &&
            <Typography 
              variant='body1'
              marginBottom='12px'>
              The user has not sent the questionnaires
            </Typography>
          }
          {user.questionnaireAnswers?.map(qa => (
            <Accordion key={qa.id}>
              <AccordionSummary
                expandIcon={<ExpandMore/>}>
                  <Typography 
                    variant='body1'
                    fontWeight='medium'
                    fontSize={17}>
                    {qa.questionnaire.title}
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {qa.answers?.map(answer => (
                  <Box 
                    key={answer.id}
                    sx={{
                      marginBottom: '12px'
                    }}>
                    <Typography 
                      variant='body2'
                      fontWeight='medium'>
                      {answer.question.title}
                    </Typography>
                    {answer.value &&
                      <Typography 
                        variant='body2'
                        marginLeft='8px'
                        marginTop='12px'>
                        {answer.value}
                      </Typography>
                    }
                    <Box 
                      component='ul' 
                      paddingLeft='8px'
                      sx={{ listStylePosition: 'inside' }}>
                      {answer.answerOptions?.map(option => (
                        <Typography
                          component='li' 
                          margin='12px 0px'
                          key={option.id}>
                          {option.option.title}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
