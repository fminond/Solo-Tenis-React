import './App.css';
import Header from "./components/Header";
import Body from './components/Body';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Box from './components/Box';
import ItemListContainer from './components/ItemListContainer';
import PokeApi from './components/PokeApi';
import { LayOut } from './components/Layout';
import { cartContext, CartContextProvider, Context } from "./context/cartContext"
import React,{createContext} from 'react';
import {ComponentA} from "./practicecomponents/ComponentA"
 


<><><script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script><script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script><script
    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin></script><script>var Alert = ReactBootstrap.Alert;</script></><link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    crossorigin="anonymous" /></>




function App() {

  const [show, setShow] = useState(true);

  const Appear = () => {
    if (show === true) {
      setShow(false)

    }
    else {
      setShow(true)

    }

  }

  return (
    <CartContextProvider>
      <div className="App">
        {/* <ComponentA/>

        <main> */}
          <LayOut>
          
            <ItemListContainer />
          </LayOut>
          <Footer/>
        {/* </main> */}
      </div>

    </CartContextProvider>

  );
}

export default App;
