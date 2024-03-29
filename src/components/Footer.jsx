import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer(props) {
  return(
    <BottomNavigation sx={{ 
      flexGrow: 1,
      color: "white",
      backgroundColor: "#1976d2",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "7%"
      }}
      onClick={() => props.onCloseMobileMenu()}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <span>Contact us: </span>
        <IconButton color="inherit" href='https://www.facebook.com'>
          <FacebookIcon/>
        </IconButton>
        <IconButton color="inherit" href='https://www.twitter.com'>
          <TwitterIcon/>
        </IconButton>
        <IconButton color="inherit" href='https://www.instagram.com'>
          <InstagramIcon/>
        </IconButton>
      </Box>
    </BottomNavigation>
  )
}

export default Footer