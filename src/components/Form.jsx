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

    state = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        favouriteColor: '',
        employed: false,
        notes: ''
    };

    handleClear = () => {
        this.setState({firstName: ''});
        this.setState({lastName: ''});
        this.setState({email: ''});
        this.setState({gender: ''});
        this.setState({favouriteColor: ''});
        this.setState({employed: false});
        this.setState({notes: ''});
    };

    render() {
        return (
            <Box sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center"
                }}
                onClick={() => this.props.onCloseMobileMenu()}
            >
                <form style={{ width:"75%" }}>
                    <Box sx={{ textAlign: "center", mt: 2 }}>
                        <h2>Please fill out the form</h2>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <TextField 
                            name="firstName"
                            label="First Name"
                            fullWidth
                            value={this.state.firstName}
                            onChange={ e => {this.setState({firstName: e.target.value})}}
                        />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <TextField 
                            name="lastName" 
                            label="Last Name" 
                            fullWidth
                            value={this.state.lastName}
                            onChange={ e => {this.setState({lastName: e.target.value})}}
                        />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <TextField 
                            name="email" 
                            label="Email"
                            fullWidth
                            value={this.state.email}
                            onChange={ e => {this.setState({email: e.target.value})}}
                        />
                    </Box>
                    <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", mt: 2 }}>
                        <FormLabel component="legend" >Gender</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="radio-buttons-group"
                            value={this.state.gender}
                            onChange={ e => {this.setState({gender: e.target.value})}}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Favourite color</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="favouriteColor"
                                label="Favourite color"
                                value={this.state.favouriteColor}
                                onChange={ e => {this.setState({favouriteColor: e.target.value})}}
                            >
                                <MenuItem value="ff0000">Red</MenuItem>
                                <MenuItem value="00ff00">Green</MenuItem>
                                <MenuItem value="0000ff">Blue</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ textAlign:"center", mt: 2 }}>
                        <FormControlLabel
                            control={<Checkbox />} 
                            label="Employed" 
                            checked={this.state.employed}
                            onChange={ e => {this.setState({employed: e.target.value})}} 
                        />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <TextField
                            name="notes"
                            label="Notes"
                            multiline
                            maxRows={2}
                            fullWidth
                            value={this.state.notes}
                            onChange={ e => {this.setState({notes: e.target.value})}}
                        />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                            <Button type="submit" variant="contained">Submit</Button>
                            <Button type="button" variant="outlined" sx={{ color: "black", border: '1px solid black' }}
                                onClick={this.handleClear}
                            >
                            Clear Values
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        )
    }
}

export default Form
