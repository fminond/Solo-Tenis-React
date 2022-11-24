import {createBrowserRouter} from "react-router-dom";

import App from "../App"
import Category from "../Views/Category";
import ItemView from "../Views/Item";


export const router = createBrowserRouter([
    {path:"/",
    element: <App/>

    },
    {path:"/category/:category",
    element: <Category></Category>},
    {path:"/item/:id",
    element: <ItemView></ItemView>
    }
])