import { logout } from '@/actions/logout';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export default async function UserLayout({ children }: Props) {
  return (
    <Box>
      <AppBar position='fixed'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            User
          </Typography>
          <Button
            color="inherit"
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
