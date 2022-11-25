import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// Mock //
import {ItemMock } from "../mocks/Item.Mock";

const ItemListContainer = () => {
    const { category } = useParams();

const [listProducts, setListProducts] = useState([]);

useEffect(() => {
    new Promise((resolve) =>
    setTimeout(() => {
        resolve(ItemMock);
    }, 2000)
).then((data) => {
if (category) {
    const categories = data.filter((listProduct)=>listProduct.category===category);
    setListProducts(categories)
}else{
    setListProducts(data)
}
});

}, [category])

    return (

        <div>
            <ItemList listProducts={listProducts}></ItemList>
        </div>

    );



}

export default ItemListContainer;

