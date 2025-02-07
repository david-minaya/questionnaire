import { getUsers } from '@/actions/getUsers';
import { logout } from '@/actions/logout';
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
import { getUser } from '@/actions/getUser';

export const dynamic = 'force-dynamic'

export default async function Admin() {

  const user = await getUser();
  const users = await getUsers();

  return (
    <Box>
      <AppBar position='fixed'>
      <Toolbar sx={{ display: 'flex', gap: '24px' }}>
          <Typography 
            variant="h6" 
            component="div"
            sx={{ flexGrow: 1 }}>
            Admin
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
