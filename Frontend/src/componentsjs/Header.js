import React from "react";
function Header()
{
    return (<div>
<header class="head">
        <h1>Pizza&nbsp;<i class="fas fa-pizza-slice"></i>&nbsp;Planet</h1>
        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#service">Services</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
        </nav>
        <div class="side-bar">
            <i class="fas fa-search" id="search"></i>
            <i class="fas fa-user" id="user"></i>
            <i class="fas fa-bars" id="bars"></i>
        </div>
        <form action="#" class="search-bar">
            < input type="search" name="search" id="1" placeholder="Search Here" ></input>
        </form>
    </header>
    </div>
    )
}

export default Header;