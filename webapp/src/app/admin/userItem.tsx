'use client';

import { User } from '@/types/user';
import { PersonOutline } from '@mui/icons-material';
import { ListItemButton, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import { UserDialog } from './userDialog';

interface Props {
  user: User;
}

export function UserItem(props: Props) {

  const { user } = props;

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <ListItemButton
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
          }
        }}
        onClick={() => setOpen(true)}>
        <ListItem dense={true}>
          <ListItemIcon>
            <PersonOutline />
          </ListItemIcon>
          <ListItemText
            primary={user.name}
            sx={{ flexGrow: 1 }} />
          {!!user.questionnaireAnswers?.length &&
            <Typography
              variant='body2'>
              {`${user.questionnaireAnswers.length} questionnaires submited`}
            </Typography>
          }
        </ListItem>
      </ListItemButton>
      <UserDialog
        open={open}
        user={user}
        onClose={() => setOpen(false)}/>
    </Fragment>
  )
}