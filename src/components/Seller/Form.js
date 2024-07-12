import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [initialData, setInitialData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: {
      L: "",
      M: "",
      S: ""
    }
  });

  const nameChangeHandler = (event) => {
    setInitialData((prevData) => ({
      ...prevData,
      name: event.target.value
    }));
  };

  const descriptionChangeHandler = (event) => {
    setInitialData((prevData) => ({
      ...prevData,
      description: event.target.value
    }));
  };

  const priceChangeHandler = (event) => {
    setInitialData((prevData) => ({
      ...prevData,
      price: event.target.value
    }));
  };

  const largeChangeHandler = (event) => {
    setInitialData((prevData) => ({
      ...prevData,
      quantity: {
        ...prevData.quantity,
        L: event.target.value
      }
    }));
  };

  const mediumChangeHandler = (event) => {
    setInitialData((prevData) => ({
      ...prevData,
      quantity: {
        ...prevData.quantity,
        M: event.target.value
      }
    }));
  };

  const smallChangeHandler = (event) => {
    setInitialData((prevData) => ({
      ...prevData,
      quantity: {
        ...prevData.quantity,
        S: event.target.value
      }
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onData(initialData);
    setInitialData({
      name: "",
      description: "",
      price: "",
      quantity: {
        L: "",
        M: "",
        S: ""
      }
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={formSubmitHandler}>
        <div className="form-group">
          <label htmlFor="shoename">Shoe Name</label>
          <input
            type="text"
            id="shoename"
            name="shoename"
            value={initialData.name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={initialData.description}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            min="0"
            value={initialData.price}
            onChange={priceChangeHandler}
          />
        </div>
        <fieldset className="fieldset-quantity">
          <legend>Quantity</legend>
          <div className="form-group">
            <label htmlFor="large">L</label>
            <input
              type="number"
              id="large"
              name="large"
              min="0"
              value={initialData.quantity.L}
              onChange={largeChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="medium">M</label>
            <input
              type="number"
              id="medium"
              name="medium"
              min="0"
              value={initialData.quantity.M}
              onChange={mediumChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="small">S</label>
            <input
              type="number"
              id="small"
              name="small"
              min="0"
              value={initialData.quantity.S}
              onChange={smallChangeHandler}
            />
          </div>
        </fieldset>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Form;
