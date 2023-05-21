import React from "react";


function Home()
{
    return (<div>
<section class="home" id="home">
        <div class="home-content">
            <div class="inner-content">
                <h3>Welcome To The World Of Pizza</h3>
                <p>NOTHING BUT SOME PIZZA TO DEFINITELY RECHARGE YOUR BATTERIES </p>
                <button class="btn" >Menu</button>
            </div>
            <div class="inner-content-img">
                {/* <img src="Home.png" alt="Pizza Picture To Be Added"/>  */}
                 <img src="fullpiza.png" width={50000} height={600}/>
                
            </div>
        </div>
    </section>
    </div>)
}

export default Home;