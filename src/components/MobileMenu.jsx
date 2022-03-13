import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import { MenuList } from '@mui/material';
import Paper from '@mui/material/Paper';


function MobileMenu() {

  return (
    <Paper sx={{ width: { xs: '50%', sm: '25%' }, position: "absolute", right: "0%", zIndex: 1 }}>
      <MenuList>
        <MenuItem>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={5} color="error">
            <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
          >
              <Badge badgeContent={11} color="error">
              <NotificationsIcon />
              </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
          >
              <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </MenuList>
    </Paper>
  )
}

export default MobileMenu