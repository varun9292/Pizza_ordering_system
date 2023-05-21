
import Axios from 'axios';
import React from "react";

var items_cart=[
    { id: 6, pizza_name: 'Cheesee Pizza', cost: 100, quantity: 1 },
    { id: 5, pizza_name: 'Paneer Pizza', cost: 100, quantity: 1 },
    { id: 4, pizza_name: 'Capsicum Pizza', cost: 100, quantity: 1 },
    { id: 7, pizza_name: 'Tomato Pizza', cost: 100, quantity: 1 },
    { id: 8, pizza_name: 'Classic Pizza', cost: 100, quantity: 1 },
    { id: 9, pizza_name: 'Onion Pizza', cost: 100, quantity: 1 }
  ];

function cart()
{

    return(
        <div>
            <h1 class="cart_h1">your orders </h1>

            <table class="cart_tabel">

                <thead>
                    <tr>
                        <th>Pizza_id</th>
                        <th>Pizza_name</th>
                        <th>cost</th>
                        <th>quantity</th>
                    </tr>
                </thead>

                <tbody>
                     { items_cart.map(item => (
                        <tr class="cart_row">
                        <td>{item.id}</td>
                        <td>{item.pizza_name}</td>
                        <td>{item.cost}</td>
                        <td>{item.quantity}</td>
                       </tr>
                     ))            
                    }
                </tbody>
            </table>
            
        </div>
    )
}
export default cart;