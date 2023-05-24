import React from 'react';
import Recipe from '../components/Recipe';
import './Recipes.css';

const Recipes = () => {
    return (
        <div>
            <div className='main'>
            <Recipe/>
            </div>
        </div>
    );
};

export default Recipes;