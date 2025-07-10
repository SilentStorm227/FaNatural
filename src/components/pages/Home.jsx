import React from "react";
import pic1 from "../images/pic1.jpeg"
import "../style/home.css"

function Home(){
    return(
        <div>
            <img src={pic1} className="slideshow"/>
        </div>
    )
}

export default Home;