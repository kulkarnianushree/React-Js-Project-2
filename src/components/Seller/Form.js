import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className="form-container">
            <form>
                <div>
                    <label htmlFor='shoename'>Shoe Name</label>
                    <input 
                        type='text'
                        id='shoename'
                        name='shoename'
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input
                        type='text'
                        id='description'
                        name='description'
                    />
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <input
                        type='number'
                        id='price'
                        name='price'
                        min='0'
                    />
                </div>
                <fieldset className="fieldset-quantity">
                    <legend>Quantity</legend>
                    <div>
                        <label htmlFor='large'>L</label>
                        <input
                            type='number'
                            id='large'
                            name='large'
                            min='0'
                        />
                    </div>
                    <div>
                        <label htmlFor='medium'>M</label>
                        <input
                            type='number'
                            id='medium'
                            name='medium'
                            min='0'
                        />
                    </div>
                    <div>
                        <label htmlFor='small'>S</label>
                        <input
                            type='number'
                            id='small'
                            name='small'
                            min='0'
                        />
                    </div>
                </fieldset>
                <button type='submit'>Add Product</button>
            </form>
        </div>
    );
};

export default Form;
