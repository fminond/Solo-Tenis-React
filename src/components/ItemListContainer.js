import { useEffect, useState } from "react";
import ItemList from "./ItemList";
// Mock //
import { item } from "../mocks/Item.Mock";

const ItemListContainer = () => {

const [listProducts, setListProducts] = useState([]);

useEffect(() => {
    new Promise((resolve) =>
    setTimeout(() => {
        resolve(item);
    }, 2000)
).then((data) => setListProducts(data))

}, [])

    return (

        <div>
            <ItemList listProducts={listProducts}></ItemList>
        </div>

    );



}

export default ItemListContainer;

