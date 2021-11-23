import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@mui/material/BottomNavigation';
import IconButton from '@mui/material/IconButton';

class Footer extends Component {

    render() {
        return(
          <BottomNavigation sx={{ 
            flexGrow: 1,
            color: "white",
            backgroundColor: "#1976d2",
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%"
          }}>
            <IconButton edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
             </IconButton>
          </BottomNavigation>
        )
    }
}

export default Footer