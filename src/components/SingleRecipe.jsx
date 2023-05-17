import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SingleRecipe.css';



const SingleRecipe = () => {
    const [singleRecipe, setRecipe] = useState([]);
    const param = useParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        axios.get(`http://localhost:4002/recipes/${param.singlerecipe}`)
        .then((res)=>{setRecipe(res.data);
      setIsLoading(false) 
     });
    },[param]);
    if (isLoading){
        return <p>Loading...</p>
    }

    if(singleRecipe.length === 0){
        return <p>Recipes not found</p>
    }
  

    console.log(singleRecipe);

    return (
      
        <div>
          <h2>{singleRecipe.title}</h2>
          <div>
            <img src={singleRecipe.img} alt="" />
          </div>
          <div>
            <h3>Ingredients:</h3>
            <ul>
                {singleRecipe.ingredients.map((ing)=>(<li key={ing.id} >{ing.ingName}: {ing.quantity} </li>
                ))}
            </ul>
          </div>
        </div>
    );
};

export default SingleRecipe;