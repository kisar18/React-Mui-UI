import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Box from '@mui/material/Box';
import Form from './Form.jsx';

class Page extends Component {
    render() {
        return(
            <Box>
                <Navbar/>
                <Box sx={{
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