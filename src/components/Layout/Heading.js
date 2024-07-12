import React from 'react';
import './Heading.css'; // Import CSS file for styling

const Heading = () => {
    return (
        <div className="heading-container">
            <h2>Shoe Shopping Mall</h2>
            <button type='button' className="cart-button">Cart</button>
        </div>
    );
};

export default Heading;
