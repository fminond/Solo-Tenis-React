import { CartContext } from "../context/cartContext";
import { useContext } from "react";

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <button
      onClick={() => removeItem(itemId)}
     
    >
      Delete Product
    </button>
  );
};