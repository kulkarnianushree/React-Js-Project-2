import React, { useState, useEffect } from "react";
import Form from "./components/Seller/Form";
import Productlist from "./components/Users/Productlist";
import Heading from "./components/Layout/Heading";
import DisplayItem from "./components/Cart/Display";
function App() {
  const [Shoelist, setShoelist] = useState([]); // track the data coming from From(seller)
  const[product,setProduct] = useState([]); // track the data selected from Productlist(user)

  const CRUD_URL = "https://crudcrud.com/api/9cadb487e78044cfbbd5fa04fd7897c7/ShoeList";

  const fetchData = async () => {
    try {
      const response = await fetch(CRUD_URL);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setShoelist(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const UserDataHandler = async (userlist) => {
    const newShoe = { ...userlist, id: Math.random().toString() };
    setShoelist((prevList) => [...prevList, newShoe]);

    try {
      const response = await fetch(CRUD_URL, {
        method: "POST",
        body: JSON.stringify(newShoe),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const SaveDataHandler = (product)=>{
    setProduct((prevProduct)=>[
      ...prevProduct,
      product
    ])
  }

  return (
    <div>
      <Heading/>
      <Form onData={UserDataHandler} />
      <Productlist list={Shoelist} onSaveData={SaveDataHandler}/>
      <DisplayItem product={product}/>
    </div>
  );
}

export default App;
