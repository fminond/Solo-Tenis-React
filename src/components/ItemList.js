import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <Item product={product} />
      ))}
    </ul>
  );
};