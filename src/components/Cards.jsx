import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = ({id,name,desc,img,author,flag}) => {
    return (
        <div className='container'>
            <div className='card u-clearfix'>
            <div className='card-body'>
            <span className='author'>{author}</span>
            <h2 className='title'>{name} <span>{flag}</span></h2>
            <p className='description'>{desc}</p>
            <Link to={`${id}`}>Read</Link>
            </div>
            <div className='image'>
            <img src={img} alt={name} />
            
            </div>
            </div>
        </div>
    );
};

export default Cards;