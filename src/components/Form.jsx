import React from 'react';

const Form = ({submit,change,countryNames,addIngredient,ingredients,removeIngredient,ingHandler}) => {
    return (
       
        <div>
            <form action="" onSubmit={submit}>
                <div>
                <label htmlFor="title">Recipe Name</label>
                <input type="text" name='title' onChange = {change}required />
                </div>
                <div>
                <label htmlFor="author">Author</label>
                <input type="text" name='author' onChange = {change} required />
                </div>
                <div>
                <label htmlFor="author">Image URL</label>
                <input type="url" name='img' onChange = {change} required />
                </div>
                <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" cols="30" rows="10" onChange = {change}></textarea>
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
                    <div className='ingredients'>
                    {ingredients.map((ing,index)=>{ 
                        return ( 
                        <div key={index}>
                       <label htmlFor="ingName">Name</label>
                       <input type="text" name='ingName' onChange={(e)=>ingHandler(e,index)}/>
                       <label htmlFor="quantity">Quantity</label>
                       <input type="text" name='quantity' onChange={(e)=> ingHandler(e,index)}/> 
                       </div>
                       
                        
                  )})}
                  </div>
                  <div className="buttons">
                  <button type="button" onClick={addIngredient}>+</button>
                  {ingredients.length > 1 && <button type="button" onClick={(e,index) => removeIngredient(e, index)}>-</button>}
                  </div>
                </fieldset>
                <label htmlFor="instructions">Instructions</label>
                <textarea name="instructions"  cols="30" rows="10" onChange={change}></textarea>
                <button type='submit'>Add Recipe</button>
            </form>
            
        </div>
    );
};

export default Form;