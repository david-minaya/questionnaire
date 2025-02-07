import { Card, Container, Typography } from '@mui/material';
import { Form } from './form';

export default function Login() {

  return (
    <Container
      maxWidth='sm'
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px'
      }}>
      <Typography variant='h4' fontWeight={500} color='primary'>
        Questionnaire
      </Typography>
      <Card
        sx={{
          width: '300px',
          padding: '20px'
        }}>
        <Typography
          variant='h5'
          fontWeight={500}
          align='center'
          marginTop='12px'>
          Login
        </Typography>
        <Form/>
      </Card>
    </Container>
  )
}
