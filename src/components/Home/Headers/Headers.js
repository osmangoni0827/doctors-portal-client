import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import MainHeader from '../MainHeaders/MainHeader';
import Navbar from '../../Shared/NavBar/Navbar';
import './Header.css';
const Headers = () => {
    return (
        <div className='headerStyle'>
            <Navbar></Navbar>
            <MainHeader></MainHeader>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Headers;