import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {ItemMock}  from "../mocks/Item.Mock";



const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const {id} =useParams();

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(ItemMock.find((item)=>item.id===id)), 1000)).then(
      (data) => setItem(data)
    );
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