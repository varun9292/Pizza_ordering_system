import React, { useState } from "react";
import Axios from 'axios';


function Contact ()
{
    
    function  myFunction()
    {
      let details={customer_name:"varunff",customer_phone_number:"123456789"};  
      Axios.post('http://localhost:5000/Contact',details)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))
      window.open('http://localhost:3000/Submit');
    }
    
    return (
        <div>
    <footer class="contact" id="contact">
    <div class="contact-sec">
        <div class="contact-inner">
            <div class="contact-inner-col">
                {/* <img src="logo.png" alt="img" class="image"></img> */}
            </div>
            <div class="contact-inner-col">
                <h1 class="contact-h1">Enter your details</h1>
                <form action="/" id="" method="post" class="form">
                    <input type="text" name="Name" id=""  placeholder="Please Enter Your Name" required />
                    <input type="text" name="phonenumber" id="" placeholder="Please Enter Your Phone NUmber" required></input>
                    <button class="btn contact-sec-btn" onClick={()=> myFunction()}>Submit</button>
                </form>
            </div>
        </div>
    </div>
</footer>
        </div>
    )
}
export default Contact;