import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './Header.css';
import logo from '../assets/rk.png';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
            <img src={logo} alt="logo" />
            </Link>
            <Nav/>
        </div>
    );
};

export default Header;