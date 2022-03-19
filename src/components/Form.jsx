import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Form(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [favouriteColor, setFavouriteColor] = useState('');
  const [employed, setEmployed] = useState(false);
  const [notes, setNotes] = useState('');
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  const handleClear = () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setGender('');
      setFavouriteColor('');
      setEmployed(false);
      setNotes('');
  };

  const handleSubmit = e => {
      e.preventDefault();
      setRedirect(true);
  }
  
  return (
    <Box sx={{
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      mt: 2
      }}
      onClick={() => props.onCloseMobileMenu()}
    >
      <form style={{ width:"75%" }} onSubmit={handleSubmit}>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <h2>Please fill out the form</h2>
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField 
            name="firstName"
            label="First name"
            required
            fullWidth
            value={firstName}
            onChange={ e => {setFirstName(e.target.value)}}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField 
            name="lastName" 
            label="Last name" 
            required
            fullWidth
            value={lastName}
            onChange={ e => {setLastName(e.target.value)}}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField 
            name="email" 
            label="Email"
            required
            type="email"
            fullWidth
            value={email}
            onChange={ e => {setEmail(e.target.value)}}
          />
        </Box>
        <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", mt: 2 }}>
          <FormLabel component="legend" >Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={gender}
            onChange={ e => {setGender(e.target.value)}}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Box>
        <Box sx={{ mt: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Favourite color</InputLabel>
            <Select
              id="favouriteColor"
              label="Favourite color"
              name='favouriteColor'
              value={favouriteColor}
              onChange={ e => {setFavouriteColor(e.target.value)}}
            >
              <MenuItem value="Red">Red</MenuItem>
              <MenuItem value="Green">Green</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ textAlign:"center", mt: 2 }}>
          <FormControlLabel
            control={<Checkbox />} 
            label="Employed"
            name='employed'
            checked={employed}
            onChange={ e => {setEmployed(!employed)}} 
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            name="notes"
            label="Notes"
            multiline
            maxRows={2}
            fullWidth
            value={notes}
            onChange={ e => {setNotes(e.target.value)}}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button type='submit' variant="contained" size="large">Submit</Button>
            <Button type="button" variant="outlined" sx={{ border: '1px solid #1976d2' }} onClick={handleClear} >
            Clear Values
            </Button>
          </Box>
        </Box>
        { redirect && navigate("/results", {state:{
          firstName: firstName,
          lastName: lastName,
          email: email,
          gender: gender,
          favouriteColor: favouriteColor,
          employed: employed,
          notes: notes
        }})
        }
      </form>
    </Box>
  )
}

export default Form
