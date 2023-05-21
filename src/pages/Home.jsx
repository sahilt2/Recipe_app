import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import bannerVideo from "../assets/steak.mp4";

const Home = () => {
    
    return (
        <div>
        <div className='banner'>
            <video src={bannerVideo} autoPlay muted loop id='bannerVideo'/>
            <h2>Recipe King</h2>
            <p>It is a Helsinki Business College task for the React basics course</p>
            <Link to='recipes'><button>Browse recipes</button></Link>
           
        </div>
        <div className='mid'>
        <h3>Looking for the recipes?</h3>
        </div>
       
        <div className='home-cards'>
            
            <div className='home-card'>
                <h3>Browse recipes</h3>
                <p>Find your favourite recipe in this section. You can also search reccipes based on name or country</p>
                <Link to='recipes'>All recipes</Link>
            </div>
            <div className='home-card'>
                <h3>Add recipes</h3>
                <p>Do you contribute some recipes? No worries you can add one </p>
                <Link to='addrecipe'>Add recipes</Link>
            </div>
            <div className='home-card'>
                <h3>Know more</h3>
                <p>Visit our programme homepage</p>
                <a href="https://en.bc.fi/" target='_blank' rel='noreferrer'>Helsinki business college</a>
            </div>
        </div>
        </div>
    );
};

export default Home;