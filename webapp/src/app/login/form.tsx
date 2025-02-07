'use client';

import { login } from '@/actions/login';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useActionState, useState } from 'react';

export function Form() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, formAction] = useActionState(login, null)

  return (
    <form action={formAction}>
      <Box
        display='flex'
        flexDirection='column'
        gap='24px'
        marginTop='24px'>
        <TextField
          id='username'
          name='username'
          size='small'
          label="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}/>
        <TextField
          id='password'
          name='password'
          size='small'
          label="Password"
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}/>
      </Box>
      {error && 
        <Typography 
          variant='body1' 
          color='error'
          align='center'
          fontWeight={500}
          marginTop='16px'>
          {error}
        </Typography>
      }
      <Button
        type='submit'
        variant='contained'
        size='large'
        sx={{
          display: 'block',
          marginTop: '36px',
          marginX: 'auto'
        }}>
        Login
      </Button>
    </form>
  )
}
