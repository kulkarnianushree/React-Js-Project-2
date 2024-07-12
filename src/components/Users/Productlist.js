import React, { useState } from 'react';
import './ProductList.css';

const ProductList = (props) => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const buyButtonHandle = async (id, size) => {
        try {
            const productToUpdate = props.list.find(item => item._id === id);
            setSelectedProducts(prevProducts => {
                const existingProductIndex = prevProducts.findIndex(product => product._id === id && product.size === size);
                const updatedProducts = [...prevProducts];

                if (existingProductIndex !== -1) {
                    if (updatedProducts[existingProductIndex].quantity[size] > 0) {
                        updatedProducts[existingProductIndex] = {
                            ...updatedProducts[existingProductIndex],
                            quantity: {
                                ...updatedProducts[existingProductIndex].quantity,
                                [size]: updatedProducts[existingProductIndex].quantity[size] - 1
                            }
                        };
                    }
                } else {
                    updatedProducts.push({
                        _id: id,
                        name: productToUpdate.name,
                        size: size,
                        quantity: {
                            L: size === 'L' ? 1 : 0,
                            M: size === 'M' ? 1 : 0,
                            S: size === 'S' ? 1 : 0
                        }
                    });
                }

                return updatedProducts;
            });

            
            await updateProductQuantity(id, size);
        } catch (error) {
            console.error('Error buying product:', error);
        }
    };


    const updateProductQuantity = async (id, size) => {
        try {
            const productToUpdate = props.list.find(item => item._id === id);
            const updatedQuantity = { ...productToUpdate };
            updatedQuantity.quantity[size] -= 1;

            const CRUD_URL = `https://crudcrud.com/api/9cadb487e78044cfbbd5fa04fd7897c7/ShoeList/${id}`;
            const response = await fetch(CRUD_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedQuantity)
            });

            if (!response.ok) {
                throw new Error('Failed to update product quantity.');
            }
            console.log(`Product quantity updated successfully for ${updatedQuantity.name} - Size ${size}`);
        } catch (error) {
            console.error('Error updating product quantity:', error);
        }
    };

    props.onSaveData(selectedProducts)

    return (
        <div>
            <h2>Product List</h2>
            <ul className="product-list">
                {props.list.map((item) => (
                    <li key={item._id} className="product-item">
                        <div className="product-details">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                        </div>
                        <div className="product-buttons">
                            {/* Buy buttons for different sizes */}
                            <button className="buy-button" onClick={() => buyButtonHandle(item._id, 'L')}>Buy L {item.quantity.L}</button>
                            <button className="buy-button" onClick={() => buyButtonHandle(item._id, 'M')}>Buy M {item.quantity.M}</button>
                            <button className="buy-button" onClick={() => buyButtonHandle(item._id, 'S')}>Buy S {item.quantity.S}</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
