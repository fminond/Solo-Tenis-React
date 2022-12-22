import { useGetItemImg } from "../hooks/useGetItemImg";
import { ItemCount } from "./ItemCount";
import { Loading } from "./Loading";
import { CartContext } from "../context/cartContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



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
      {/* Item image */}
      <div className="box">
        {!img ? (
          <Loading />
        ) : (
          <img src={img} alt={item.name} />
        )}
      </div>
      

      {/* Item description */}
      <div className="flex flex-col justify-center pl-10">
        <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
        <p className="mt-4 text-xl">{item.description}</p>
        <span className="mt-4 text-xl">
          Price: <strong className="text-gray-800">${item.price}</strong>
        </span>
        {currentStock > 0 && (
          <p className="text-sm">Stock: {currentStock}</p>
        )}

        <div className="flex flex-col flex-1 items-center">
          {/* Count */}
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span className="text-red-500 mt-10">Out of stock</span>
          )}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={handleAdd}
              className="w-4/5 bg-gray-200 px-4 py-2 mt-2 rounded disabled:opacity-40"
              disabled={currentStock === 0}
            >
              Add to cart
            </button>
            <button
              disabled={!isInCart(item.id)}
              onClick={handleCheckout}
              className="w-4/5 bg-gray-800 text-white px-4 py-2 mt-2 rounded disabled:opacity-50"
            >
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;


