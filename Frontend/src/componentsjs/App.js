import React from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import About from "./about.js";
import Services from "./service.js";
import Menu from "./Menu.js";
import Footer from "./footer.js";
import Contact from "./contact.js";
function App()
{
    return (
    <div>
        <Header/>
        <Home/>
        <About/>
        <Services/>
        <Menu/>
        <Contact/>
        <Footer/>
    </div>
    );
}

export default App;