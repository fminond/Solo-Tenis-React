import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../assets/IMG/empty.png"
import { Item } from "../components/Item";
import { Layout } from "../components/Layout";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";

const CartView = () => {
  const navigate = useNavigate();
  const { productsAdded: items, totalAmount } = useContext(CartContext);

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Layout>
      <div>
        {items.length === 0 ? (
          <div>
            <img src={EmptyCart} alt="Empty Cart"/>
            <h1>You haven't added products yet</h1>
            <button
              onClick={() => navigate("/")}

            >
              Back to Home
            </button>
          </div>
        ) : (
          <div>
            <div>
              {items.map((product) => {
                const quantityAdded = product.quantityAdded;
                return (
                  <div>
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div className="mt-1">
              <div>
                <span>
                  Total amount: ${totalAmount}
                </span>
                <div className="checkout">
                <button
                  onClick={goToCheckout}
                >
                 Checkout
                </button>
                </div>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;