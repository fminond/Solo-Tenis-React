import React from "react";
import ReactDOM from "react-dom/client";
// Bootstrap CSS
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";  
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZcwOBb04eV5D9SjMGPAHvpnv6P9RB1wI",
  authDomain: "ecommerce-final-2292d.firebaseapp.com",
  projectId: "ecommerce-final-2292d",
  storageBucket: "ecommerce-final-2292d.appspot.com",
  messagingSenderId: "326953014775",
  appId: "1:326953014775:web:5f27a6c992b9a3d306caf2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();
