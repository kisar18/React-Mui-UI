import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Form from './components/Form.jsx';
import Formresults from './components/FormResults.jsx';
import Footer from './components/Footer.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const showMobileMenu = () => {
    setMobileMenuVisible(true);
  }
  
  const closeMobileMenu = () => {
    if(mobileMenuVisible) {
      setMobileMenuVisible(false);
    }
  }

  return (
    <BrowserRouter>
      <Navbar
        mobileMenuVisible={mobileMenuVisible}
        onShowMobileMenu={showMobileMenu}
        onCloseMobileMenu={closeMobileMenu}
      />
      <Routes>
        <Route path='/' exact element={<Form onCloseMobileMenu={closeMobileMenu} />} />
        <Route path='/results' exact element={<Formresults/>} />
      </Routes>
      <Footer onCloseMobileMenu={closeMobileMenu}/>
    </BrowserRouter>
  );
}

export default App;
