import Item from "./Item"

const ItemList = ({ listProducts }) => {
    return (
        <ul>
            {listProducts.map((listProduct) => (
                <Item listProduct={listProduct} />
            ))}

        </ul>
    )
}

export default ItemList; 