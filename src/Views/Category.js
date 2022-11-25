import { LayOut } from "../components/Layout";
import Item from "../components/Item";
import { useParams } from "react-router-dom";
import { ItemMock } from "../mocks/Item.Mock";
import ItemListContainer from "../components/ItemListContainer";


const CategoryView = () => {
    const { category } = useParams();
    const categories = ItemMock.filter((listProduct)=>listProduct.category===category)

    return (
        <LayOut>
            <ItemListContainer></ItemListContainer>
           {categories.map((listProduct)=>(
           <Item listProduct ={listProduct} ></Item>
           ))}
        </LayOut>
    )


}

export default CategoryView;

