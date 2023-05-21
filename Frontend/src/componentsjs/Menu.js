import { useEffect } from "react";
import React from "react";
import Axios from 'axios';
//let details;
function Menu()
{
     async function myFunction(id)
    {
      var details={"id_number":id};
      Axios.post('http://localhost:5000/Menu', details)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))
    }

    function cart()
    {
        window.open("http://localhost:3000/cart");
    }
    return ( 
     <div>
      <section class="menu" id="menu">
      <h4>Menu</h4>
    <div class="menu-content">
        <div class="in-box">
            <i class="far fa-heart"></i>
             {/* <img src="" alt="icon to be added" class="veg-icon"> </img> */}
            <img src="1.png" alt="picture to be added" class="star"/>
            <div class="in-content">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Non Veg Loaded</h2>
                    <div class="price">Rs 100</div>
                    <button class="btn" id="1" onClick={()=> myFunction(1)}>Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>

        <div class="in-box">
            <i class="far fa-heart"></i>
            {/* <img src="" alt="icon to be added" class="veg-icon"> </img> */}
            <img src="2.png" alt="picture to be added"/>
            <div class="in-content">
                <div class="star" >
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Veg Loaded</h2>
                    <div class="price">Rs.100</div>
                    <button class="btn" id="2" onClick={()=>myFunction(2)}>Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>

        <div class="in-box">
            <i class="far fa-heart"></i>
            {/* <img src="" alt="icon to be added" class="veg-icon"></img> */}
            <img src="3.png" alt="picture to be added"></img>
            <div class="in-content">
                <div class="star" id="3">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Pepper Barbecue Chcicken</h2>
                    <div class="price">Rs.100</div>
                    <button class="btn" id="3" onClick={()=>myFunction(3)}>Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>

        <div class="in-box">
            <i class="far fa-heart"></i>
            {/* <img src="" alt="icon to be added" class="veg-icon"></img> */}
            <img src="4.png" alt="picture to be added"></img>
            <div class="in-content">
                <div class="star" id="4">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Capsicum Pizza</h2>
                    <div class="price">Rs.100</div>
                    <button class="btn" id="4" onClick={()=>myFunction(4)}>Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>

        <div class="in-box">
            <i class="far fa-heart"></i> 
            {/* <img src="" alt="icon to be added" class="veg-icon"></img> */}
            <img src="5.png" alt="picture to be added"></img>
           
            <div class="in-content">
                <div class="star" id="5">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Paneer Pizza</h2>
                    <div class="price">Rs.100</div>
                    <button class="btn" id="5" onClick={()=>myFunction(5)}>Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>

        <div class="in-box">
            <i class="far fa-heart"></i>
            {/* <img src="" alt="icon to be added" class="veg-icon"></img> */}
            <img src="6.png" alt="picture to be added"></img>
            <div class="in-content">
                <div class="star" id="6">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Cheesee Pizza</h2>
                    <div class="price">Rs.100</div>
                    <button class="btn" id="6" onClick={()=>myFunction(6)}>Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>

        <div class="in-box">
            <i class="far fa-heart"></i>
            {/* <img src="" alt="icon to be added" class="veg-icon"> </img> */}
            <img src="7.png" alt="picture to be added"></img>
            
            <div class="in-content">
                <div class="star" id="7">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Tomato Pizza</h2>
                    <div class="price">Rs.100</div>
                    <button class="btn" id="7" onClick={()=>myFunction(7)}>Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>

        <div class="in-box">
            <i class="far fa-heart"></i>
             {/* <img src="" alt="icon to be added" class="veg-icon"></img> */}
            <img src="8.png" alt="picture to be added"></img> 
            <div class="in-content">
                <div class="star" id="8">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Classic Pizza</h2>
                    <div class="price">Rs.100</div>
                    <button class="btn" id="8" onClick={()=>myFunction(8)}>Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>

        <div class="in-box">
            <i class="far fa-heart"></i>
            {/* <img src="" alt="icon to be added" class="veg-icon"></img> */}
            <img src="9.png" alt="picture to be added"></img>
            <div class="in-content">
                <div class="star" id="9">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Onion Pizza</h2>
                    <div class="price">Rs.100</div>
                    <button class="btn" id="9" onClick={()=>myFunction(9)}>Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>
        </div>

        <button class="btn cart_btn" onClick={()=>cart()}>Open cart</button>
      </section>

    </div>
    )
}

export default Menu;