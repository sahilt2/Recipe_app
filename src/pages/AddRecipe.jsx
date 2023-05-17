
import React, {useState,useEffect} from 'react';
import Form from '../components/Form';
import axios from 'axios';
import './addRecipe.css';

const AddRecipe = () => {
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
    const [countries, setCountries] = useState([]);
    const [ingredients, setIngredients] = useState([
        {id:1 ,ingName:"",quantity:""},
    ]);

    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all")
        .then(res=> {console.log(res.data)
            setCountries(res.data)})
     },[])

    // adding more ingredient field
    const addIngredient = (e) => {
        e.preventDefault();
        const newIngredient = { id: ingredients.length + 1, ingName: "", quantity: "" };
        setIngredients([...ingredients, newIngredient]);

        // console.log(newIngredient);
      };

      // remove ingredient button
    const removeIngredient = (e,index) => {
        e.preventDefault();
        if ( ingredients.length > 1){
            const ing = [...ingredients];
           ing.splice(index,1);
            setIngredients(ing)
        }
      };

    const ingHandler = (e,index) => {
        const {name,value} = e.target;
        const updateIngredient = [...ingredients];
        updateIngredient[index][name] = value;
        setIngredients(updateIngredient)
        setInputData({...inputData,ingredients:ingredients})

    }

    const inputHandler = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);

        // setInputData({...inputData,[e.target.name]:e.target.value})
       const {name,value} = e.target;
 
       if (name === "country") {
          const selectedCountry = countries.find(country => country.name.common === value);
          setInputData({...inputData,
            country: value,
            flag: selectedCountry.flag
          });
        } else  {
          setInputData({ ...inputData, [name]: value });
        } 
    }

    const submitData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4002/recipes", inputData);
      };

    return (
     
        <div className='form-container'>
            <Form 
            submit={submitData} 
            change={inputHandler} 
            countryNames = {countries} 
            ingredients = {ingredients} 
            addIngredient = {addIngredient} 
            removeIngredient = {removeIngredient} 
            ingHandler={ingHandler}/>
        </div>
    );
};

export default AddRecipe;