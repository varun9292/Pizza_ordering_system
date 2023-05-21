import React from "react";

function About()
{
    return (
        <div>
<section class="about" id="about">
    <h4>About</h4>
    <div class="about-sec">
        <div class="img">
            <img src="about.png" alt="img"/>
        </div>
        <div class="about-content">
            <h3>Pizza Zone</h3>
            <p> Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.</p>
            <div class="about-inner">
                <h5><i class="fas fa-arrow-alt-circle-right"></i>Good Quality</h5>
                <h5><i class="fas fa-arrow-alt-circle-right"></i>Fresh Vagetables</h5>
                <h5><i class="fas fa-arrow-alt-circle-right"></i>Available 24X7</h5>
                <h5><i class="fas fa-arrow-alt-circle-right"></i>Best Price</h5>
                <h5><i class="fas fa-arrow-alt-circle-right"></i>Best Quality</h5>
            </div>
            <button class="btn">Read More</button>
        </div>
    </div>
</section>
        </div>
    )
}

export default About;