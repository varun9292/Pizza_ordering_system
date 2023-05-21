import React from "react";
import ReactDOM from "react-dom";
import App from "./componentsjs/App.js";
import Food from "./pages/food.js"
import Delivery from "./pages/delivery.js";
import Payment from "./pages/payment.js";
import Submit from "./pages/submit.js";
import Cart from "./pages/cart.js";
import { BrowserRouter,Routes,Route} from "react-router-dom";


export default function Final()
{
  return(

    <BrowserRouter>
    <Routes>
        <Route index element={<App />}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        <Route path="/submit" element={<Submit/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}


ReactDOM.render(<Final/>,document.getElementById("root"))








