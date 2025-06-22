import React from "react";
import "../style/home.css"
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";

function Home(){
    return(
        <div>
            <div className="toptext">
            <h1>FaNaturals</h1>
            </div>
            
            <img src={img1}  className="image1"/>
            <img src={img2}  className="image1"/>
            <img src={img3}  className="image1"/>
            <img src={img4}  className="image1"/>
            <img src={img5}  className="image1"/>
        </div>
    )
}

export default Home;