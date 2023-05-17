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
        return recipe.title.toLowerCase().includes(searchRecipe.search.toLowerCase());
    })
    
    return (
        <div>
            <div className='search'>
                <Search change={searchHandler}/>
            </div>
            {searchFilter.map((recipe) => (<Cards
            id = {recipe.id}
            key = {recipe.id}
            name = {recipe.title}
            desc = {recipe.description}
            img = {recipe.img}
            author = {recipe.author}
            />)     
            )}
        </div>
        
    );
};

export default Recipe;