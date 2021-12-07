import React, { Component } from 'react';
import Field from '@mui/material/TextField';
import Box from '@mui/material/Box';

class Form extends Component {
    render() {
        return (
            <Box sx={{
                
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mb: 3,
                    px: 30
                }}>
                    <Field
                    name="firstName"
                    label="First Name"
                    />
                    <Field name="lastName" label="Last Name" />

                    <Field name="email" label="Email" />
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <button type="submit">Submit</button>
                    <button type="button">
                    Clear Values
                    </button>
                </Box>
            </Box>
        )
    }
}

export default Form
