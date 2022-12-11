import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {ItemMock}  from "../mocks/Item.Mock";



const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const {id} =useParams();

  useEffect(() => {
    new Promise((resolve) =>
    //Simulation of a call to an API
    setTimeout(() => {
    const itemFiltered = ItemMock.find((item)=>item.id===id)
    resolve(itemFiltered);
   } ,1000)
    .then((data) => setItem(data)));
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  } 

  return(
    <div>
      <ItemDetail item={item}></ItemDetail>
    </div>
  ) 
};

export default ItemDetailContainer;