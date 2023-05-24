import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Cards from './Cards';
import Search from './Search';


const Recipe = () => {
    const [recipes , setRecipes] = useState([]);
    const [searchRecipe , setSearch] = useState({search:""});
    const [isLoading, setIsLoading] = useState(false);

    
    
  

    useEffect(()=>{
        setIsLoading(true);
        axios.get("http://localhost:4002/recipes")
        .then(res => {setRecipes(res.data);
            setIsLoading(false);
        })
    }, []);

    if(isLoading){
      return <p>Loading....</p>
      
    }

   

    const searchHandler = (e) =>{
        e.preventDefault();
        let search = e.target.value;
        setSearch({...searchRecipe,search})
    }

    const searchFilter = recipes.filter((recipe) => {
        const searchTitle = recipe.title.toLowerCase().includes(searchRecipe.search.toLowerCase());
        const searchCountry = recipe.country.toLowerCase().includes(searchRecipe.search.toLowerCase());
        return searchTitle || searchCountry
    })
    
    return (
        <div className='main'>
            <div className='search'>
                <Search change={searchHandler}/>
            </div>
            <div>
            {searchFilter.map((recipe) => (<Cards
            id = {recipe.id}
            key = {recipe.id}
            name = {recipe.title}
            desc = {recipe.description}
            img = {recipe.img}
            author = {recipe.author}
            flag={recipe.flag}
            />)     
            )}
            </div>
        </div>
        
    );
};

export default Recipe;