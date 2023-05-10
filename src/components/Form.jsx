import React from 'react';

const Form = () => {
    return (
        <div>
            <form action="">
                <div>
                <label htmlFor="title">Name</label>
                <input type="text" name='title' required />
                </div>
                <div>
                <label htmlFor="author">Author</label>
                <input type="text" name='author' required />
                </div>
                <div>
                <label htmlFor="description">Description</label>
                <input type="text" name='description' required />
                </div>
                <div>
                <label htmlFor="country">Country</label>
             <select name="country" id="country">
                <option value="selected">Choose a country</option>

             </select>
                </div>
                <fieldset>
                    <legend>Ingredients</legend>
                </fieldset>
            </form>
        </div>
    );
};

export default Form;