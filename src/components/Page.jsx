import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Box from '@mui/material/Box';
import Form from './Form.jsx';

class Page extends Component {
    render() {
        return(
            <Box>
                <Navbar sx={{ mb: 100 }}/>
                <Box sx={{
                    mx: 'auto',
                    width: 900,
                    //border: '1px solid black',
                    mt: 2
                }}>
                    <Form/>
                </Box>
                <Footer/>
            </Box>
        )
    }
}

export default Page