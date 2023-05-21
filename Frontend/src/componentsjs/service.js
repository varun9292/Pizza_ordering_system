import React from "react";


function Services()
{

    function Fd()
    {
        window.open("http://localhost:3000/delivery");
    }

    function Op()
    {
        window.open("http://localhost:3000/Payment");
    }
    function Ff()
    {
        window.open("http://localhost:3000/food");
    }
    return (<div>
<section class="service" id="service">
    <h4>Services</h4>
    <div class="service-content">
        <div class="inner-box">
            <img src="delivery.png" alt=""></img>
            <h2>Free Delivery</h2>
            <p>Paragraph Has to be added.</p>
            <button class="btn" onClick={()=>Fd()}>Read More</button>
        </div>
        <div class="inner-box">
            <img src="payment.png" alt=""></img>
            <h2>Online Payment</h2>
            <p>Paragraph Has to be added.</p>
            <button class="btn" onClick={()=>Op()}>Read More</button>
        </div>
        <div class="inner-box">
            <img src="freshfood.png" alt=""></img>
            <h2>Fresh Food</h2>
            <p>Paragraph Has to be added.</p>
            <button class="btn" onClick={()=>Ff()}>Read More</button>
        </div>
    </div>
</section>
    </div>)
}

export default Services;