import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = ({id,name,desc,img,author}) => {
    return (
        <div className='container'>
            <div className='card u-clearfix'>
            <div className='card-body'>
            <span className='author'>{author}</span>
            <h2 className='title'>{name}</h2>
            <p className='description'>{desc}</p>
            <Link to={`${id}`}><p className="card-read"> Read</p></Link>
            <div className='image'>
            <img src={img} alt={name} />
            </div>
            
            </div>
            
            </div>
        </div>
    );
};

export default Cards;