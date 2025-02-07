import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
 
export default function UnAuth() {
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
            Unauthorized
          </Typography>
          <Typography
            variant='h2'
            marginTop='24px'
            fontWeight='bold'>
            401
          </Typography>
          <Link href='/login'>
            <Button
              variant='contained'
              size='large'
              sx={{ margin: '24px' }}>
              Login
            </Button>
          </Link>
        </Box>
    </Container>
  );
}
