import { CartContext } from "../context/cartContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../hooks/useGetItemImg";
import { ItemCount } from "./ItemCount";
import { Loading } from "./Loading";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;
  const img = useGetItemImg(item.img);

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity)
      setCount(count + 1);
    if (type === "minus" && count > 1)
      setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("There is none existence of this product");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (

    <div >
      {/* Item images code */}
      <div className="box">
        {!img ? (
          <Loading />
        ) : (
          <img src={img} alt={item.name} />
        )}
      </div>


      {/* Items description code */}
      <div>
        <h2>{item.name}</h2>
        <p className="mt-3">{item.description}</p>
        <span className="mt-4">
          Price: <strong>${item.price}</strong>
        </span>
        {currentStock > 0 && (
          <p>Stock: {currentStock}</p>
        )}

        <div>
          {/* Counter code */}
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span><strong>Out of stock</strong></span>
          )}
          <div>
            <button
              onClick={handleAdd}
              className="mt-2 rounded disabled:opacity-60"
              disabled={currentStock === 0}
            >
              Add to cart
            </button>
            <button
              disabled={!isInCart(item.id)}
              onClick={handleCheckout}
              className="mt-4 rounded "
            >
              Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;


