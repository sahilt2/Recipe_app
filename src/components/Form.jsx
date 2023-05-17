import React from 'react';

const Form = ({submit,change,countryNames,addIngredient,ingredients,removeIngredient,ingHandler}) => {
    
    return (
        <div>
            <form action="" onSubmit={submit}>
                <div>
                <label htmlFor="title">Name</label>
                <input type="text" name='title' onChange = {change}required />
                </div>
                <div>
                <label htmlFor="author">Author</label>
                <input type="text" name='author' onChange = {change} required />
                </div>
                <div>
                <label htmlFor="description">Description</label>
                <input type="text" name='description' onChange = {change} required />
                </div>
                <div>
                <label htmlFor="country">Country</label>
        
              <select name="country" id="country" onChange={change}>
                <option value="selected">Choose a country</option>
                {countryNames.map((country,i)=>(
                    <option key = {i} value={country.name.common}>{country.name.common}</option>
                    
                ))}
             </select> 
                </div>
                <fieldset>
                    <legend>Ingredients</legend>
                    {ingredients.map((ing,index)=>{ 
                        return ( 
                        <div key={index}>
                       <label htmlFor="ingName">Ingredient Name</label>
                       <input type="text" name='ingName' onChange={(e)=>ingHandler(e,index)}/>
                       <label htmlFor="quantity">Quantity</label>
                       <input type="text" name='quantity' onChange={(e)=> ingHandler(e,index)}/> 
                       <button type="button" onClick={addIngredient}>+</button>
                       {<button type="button" onClick={(e)=>removeIngredient(e,index)}>-</button>}
                       </div>
                       
                        
                  )})}
                </fieldset>
                <button type='submit'>Add Recipe</button>
            </form>
            
        </div>
    );
};

export default Form;