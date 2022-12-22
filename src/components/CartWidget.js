import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const CartWidget = () => {
  const { productsAdded } = useContext(CartContext);
  const count = productsAdded.length;

  return (
    <div>
      <Link to="/cart">
        <button
          type="button"
          
        >
          Cart
        </button>
        {count > 0 && (
          <span className="numberItemCart">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
