import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Box from '@mui/material/Box';

class Page extends Component {
    render() {
        return(
            <Box sx={{ }}>
                <Navbar/>
                
                <Footer/>
            </Box>
        )
    }
}

export default Page