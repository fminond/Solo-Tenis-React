import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/cartContext";

import {doc,getFirestore,addDoc,collection,updateDoc } from "firebase/firestore";

const CheckoutView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const { productsAdded: items, clear, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  const handlePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;
    const direction = event.target[2].value;

    setIsLoading(true);

    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
      buyer: { name, phone, email,direction },
      items,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .finally(() => {});
  };

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const updatedData = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, updatedData).then(() => {
            clear();
            setIsLoading(false);
            alert("Thank you very much for your purchase. See you soon!");
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }
    
  }, [updatingProducts]);

  return (
    <Layout>
      <form onSubmit={handlePurchase}>
        <div>
          <input
            className="mb-3 rounded-md"
            placeholder="Complete name"
            required
          />
          <input
            className="mb-3 rounded-md"
            placeholder="Telephone number"
            type="number"
            required
          />
          <input
            className="mb-3 rounded-md"
            placeholder="Mail"
            type={"email"}
            required
          />
          <input
            className="mb-3 rounded-md"
            placeholder="Direction"
            required
          />
        </div>
        <span>
         Total Amount: ${totalAmount}
        </span>
        <button
          type="submit"
          disabled={isLoading}
        >
          ¡Buy! 
        </button>
      </form>
    </Layout>
  );
};

export default CheckoutView;