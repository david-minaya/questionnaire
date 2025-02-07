'use client';
 
import { Box, Container, Typography } from '@mui/material';
 
export default function Error() {
 
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Typography
            variant='h4'>
            Unknown Error
          </Typography>
          <Typography
            variant='h2'
            marginTop='24px'
            fontWeight='bold'>
            500
          </Typography>
        </Box>
    </Container>
  );
}
