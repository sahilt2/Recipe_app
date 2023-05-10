import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Form from './Form';
import Cards from './Cards';


const Recipe = () => {
    const [recipes , setRecipes] = useState([]);
    const [searchRecipe , setSearch] = useState({search:""});

    const [inputData, setInputData] = useState({
        id: "",
        title: "",
        author: "",
        description: "",
        country:"",
        flag:"",
        img:"",
        ingredients:[]

    });
    

    useEffect(()=>{
        axios.get("http://localhost:4002/recipes")
        .then(res => {setRecipes(res.data)})
    }, []);

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
            <div>
                <input type="text" onChange={searchHandler}/>
            </div>
            {searchFilter.map((recipe) => (<Cards
            key = {recipe.id}
            name = {recipe.title}
            desc = {recipe.description}
            img = {recipe.img}
            author = {recipe.author}
            />)     
            )}
            {/* {recipes.ingredients.map((ing)=>(<Main
            key = {ing.id}
            ingName = {ing.ingName}
            quantity = {ing.quantity}/>))} */}
        </div>
        
    );
};

export default Recipe;