import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import MobileMenu from './components/MobileMenu';
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
      <Header
        onShowMobileMenu={showMobileMenu}
        onCloseMobileMenu={closeMobileMenu}
      />
      {mobileMenuVisible && (<MobileMenu />)}
      <Routes>
        <Route path='/' exact element={<Form onCloseMobileMenu={closeMobileMenu} />} />
        <Route path='/results' exact element={<Formresults onCloseMobileMenu={closeMobileMenu}/>} />
      </Routes>
      <Footer onCloseMobileMenu={closeMobileMenu}/>
    </BrowserRouter>
  );
}

export default App;
