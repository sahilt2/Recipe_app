import React from 'react';
import './Cards.css';

const Cards = ({name,desc,img,author}) => {
    return (
        <div className='container'>
            <div className='card u-clearfix'>
            <div className='card-body'>
            <span className='author'>{author}</span>
            <h2 className='title'>{name}</h2>
            <p className='description'>{desc}</p>
            <div className="card-read">Read</div>
            <div className='image'>
            <img src={img} alt="momo" />
            </div>
            
            </div>
            
            </div>
        </div>
    );
};

export default Cards;