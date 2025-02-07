import { getUser } from '@/actions/getUser';
import { logout } from '@/actions/logout';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export default async function UserLayout({ children }: Props) {

  const user = await getUser();

  return (
    <Box>
      <AppBar position='fixed'>
        <Toolbar sx={{ display: 'flex', gap: '24px' }}>
          <Typography 
            variant="h6" 
            component="div"
            sx={{
              flexGrow: 1
            }}>
            User
          </Typography>
          <Typography variant="body1" component="div">
            {user?.name}
          </Typography>
          <Button
            color='secondary'
            variant='contained'
            onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container sx={{ padding: '40px' }}>
        {children}
      </Container>
    </Box>
  );
}
