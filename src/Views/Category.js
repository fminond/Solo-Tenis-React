import { LayOut } from "../components/Layout";
import Item from "../components/Item";
import { useParams } from "react-router-dom";
import { ItemMock } from "../mocks/Item.Mock";


const CategoryView = () => {
    const { category } = useParams();
    const categories = ItemMock.filter((listProduct)=>listProduct.category==="balls")

    return (
        <LayOut>
           {categories.map((listProduct)=>(
           <Item listProduct ={listProduct} ></Item>
           ))}
        </LayOut>
    )


}

export default CategoryView;

