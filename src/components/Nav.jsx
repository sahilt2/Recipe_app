import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <nav>
                <ul>
                    <li>
                        <NavLink to='recipes'>Recipes</NavLink>
                    </li>
                    <li>
                        <NavLink to='addRecipe'>Add Recipes</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;