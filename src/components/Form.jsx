import React, { Component } from 'react';
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

class Form extends Component {
    render() {
        return (
            <Box sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                //border: "1px solid black"
            }}>
                <form>
                    <div>
                        <TextField name="firstName" label="First Name" />
                    </div>
                    <div>
                        <TextField sx={{ mt: 2 }} name="lastName" label="Last Name"/>
                    </div>
                    <div>
                        <TextField sx={{ mt: 2 }} name="email" label="Email"/>
                    </div>
                    <div>
                        <FormLabel sx={{ mt: 2 }} component="legend">Gender</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </div>
                    <div>
                        <FormControl sx={{ mt: 2 }} fullWidth>
                            <InputLabel id="demo-simple-select-label">Favourite color</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="favouriteColor"
                                //value={favouriteColor}
                                label="Favourite color"
                            >
                                <MenuItem value="ff0000">Red</MenuItem>
                                <MenuItem value="00ff00">Green</MenuItem>
                                <MenuItem value="0000ff">Blue</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControlLabel sx={{ mt: 2 }} control={<Checkbox />} label="Employed" />
                    </div>
                    <div>
                        <TextField
                            sx={{ mt: 2 }}
                            name="notes"
                            label="Notes"
                            multiline
                            maxRows={2}
                        />
                    </div>
                    <div>
                        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
                            <Button type="submit" variant="contained">Submit</Button>
                            <Button type="button" variant="outlined" sx={{ color: "black", border: '1px solid black' }}>
                            Clear Values
                            </Button>
                        </Box>
                    </div>
                </form>
            </Box>
        )
    }
}

export default Form
