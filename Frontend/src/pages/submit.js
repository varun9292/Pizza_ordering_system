
import Axios from 'axios';
import React from "react";


var order_id;


function check()
{
  Axios.get("//localhost:5000/Submit")
  .then(function(response)
  {
    order_id=response.data[0];
  })
  .catch(err=>console.log(err))
}
check();

function Submit()
{
    return(

        <div>
            <h1>Thanks for the order food is preparing your order number  is {order_id}</h1>
        </div>
    )
}

export default Submit;

