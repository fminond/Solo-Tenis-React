import { LayOut } from "../components/Layout";
import React, {useContext } from "react";
import { Context } from "../context/cartContext";
import { Link } from "react-router-dom";
const CartView = () => {
    const {cart}=useContext(Context);
    if (cart.lenght===0){
        return (
            <h1>You haven't added products to your cart yet. You can see them <Link to ="/">here</Link></h1>
        )
    }
    return (
        <LayOut>
            {cart.map((producto)=>{
                <h1 key={producto.id}>{producto.nombre}</h1>
            })}
        </LayOut>
    );

};

export default CartView;