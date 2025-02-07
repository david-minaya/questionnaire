import { getUser } from '@/actions/getUser';
import { getUsers } from '@/actions/getUsers';
import { logout } from '@/actions/logout';
import { redirect } from 'next/navigation';
import { UserItem } from './userItem';

import { 
  AppBar, 
  Box, 
  Button, 
  Container, 
  List, 
  Toolbar, 
  Typography 
} from '@mui/material';

export const dynamic = 'force-dynamic'

export default async function Admin() {

  const user = await getUser();
  const users = await getUsers();

  if (user.role != 'admin') redirect('/');

  return (
    <Box>
      <AppBar position='fixed'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Admin
          </Typography>
          <Button
            color="inherit"
            onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Container sx={{ padding: '40px' }}>
        <Typography variant="h5">
          Users
        </Typography>
        <List sx={{ marginTop: '12px' }}>
          {users.map(user => (
            <UserItem key={user.id} user={user}/>
          ))}
        </List>
      </Container>
    </Box>
  );
}
