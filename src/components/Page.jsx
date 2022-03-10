import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Box from '@mui/material/Box';
import Form from './Form.jsx';

class Page extends Component {

    state = {
        mobileMenuVisible: false
    }

    showMobileMenu = () => {
        this.setState({mobileMenuVisible: true});
    }
    
    closeMobileMenu = () => {
        if(this.state.mobileMenuVisible) {
            this.setState({mobileMenuVisible: false});
        }
    }

    render() {
        return(
            <Box>
                <Navbar
                    mobileMenuVisible={this.state.mobileMenuVisible}
                    onShowMobileMenu={this.showMobileMenu}
                    onCloseMobileMenu={this.closeMobileMenu}
                />
                <Box sx={{
                    mt: 2
                }}>
                    <Form onCloseMobileMenu={this.closeMobileMenu}/>
                </Box>
                <Footer onCloseMobileMenu={this.closeMobileMenu}/>
            </Box>
        )
    }
}

export default Page