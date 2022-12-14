import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Cart from "../views/cart";
import Category from "../views/category";
import CheckoutView from "../views/checkout";
import Item from "../views/item";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
  {
    path: "/item/:id",
    element: <Item />,
  },
  { path: "/checkout", element: <CheckoutView /> },
]);