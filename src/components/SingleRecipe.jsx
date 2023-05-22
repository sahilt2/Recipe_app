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
  

    return (
      
        <div className='single-recipe'>
          <h2>{singleRecipe.title}</h2>
          <div className='single-area'>
          <div className='single-img'>
            <img src={singleRecipe.img} alt={singleRecipe.title} />
            <div className='flag'>
              <span>{singleRecipe.flag}</span>
            </div>
          </div>
          <div className='text-area'>
            <p className='author'>{singleRecipe.author}</p>
          <h2>Instructions</h2>
          <p>{singleRecipe.instructions}</p>
          </div>
          </div>
          <div>
            <h3>Ingredients</h3>
            <table>
              <thead>
              <tr>
                <th>Items</th>
                <th>Amount</th>
              </tr>
              </thead>
              <tbody>
              {singleRecipe.ingredients.map((ing)=>(
              <tr key={ing.id} >
                <td>{ing.ingName}</td>
                <td>{ing.quantity}</td> 
              </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
};

export default SingleRecipe;