import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
            <h1>Recipe King</h1>
            </Link>
            <Nav/>
        </div>
    );
};

export default Header;