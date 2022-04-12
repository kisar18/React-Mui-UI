import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from '@mui/material/Typography';

function Formresults() {
  const location = useLocation();

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mt: 2
      }}
    >
      <Typography sx={{ color: "#1976d2", fontWeight: "bold", my: 4 }} variant='h3'>↓ Results ↓</Typography>
      <Box sx={{ 
        width: { xs: '75%', lg: '50%' },
        bgcolor: "background.paper", 
        border: "10px solid #1976d2", 
        borderRadius: "10px",
        }}
      >
        <List>
          <ListItem>
            <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: "bold"}} >First name: {location.state.firstName}</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: "bold"}}>Last name: {location.state.lastName}</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: "bold"}}>Email: {location.state.email}</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: "bold"}}>Gender: {location.state.gender}</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: "bold"}}>Favourite color: {location.state.favouriteColor}</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: "bold"}}>Employed: {location.state.employed ? "Yes" : "No"}</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: "bold"}}>Notes: {location.state.notes}</ListItemText>
          </ListItem>
        </List>
      </Box>
      <Link to='/' style={{ 
        color: "#1976d2", 
        marginTop: '15px', 
        border: '3px solid #1976d2', 
        borderRadius: '10px', 
        padding: '15px',
        textDecoration: 'none'
        }}
      >
          <Typography variant='h3'>Go back</Typography>
      </Link>
    </Box>
  );
}

export default Formresults;
