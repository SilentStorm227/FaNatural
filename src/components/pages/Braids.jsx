import React from "react";
import "../style/braids.css"
import p1 from "../images/pic3.jpg"
import p2 from "../images/pic4.jpeg"
import p3 from "../images/pic5.jpeg"

function Braids(){
    return(
        <div>
            <div className="top">
                <h1>Braids</h1>
                <p>I am a mobile and home-based braider. I offer clean, protective, and professional styling services for all ages.</p>
            </div>
            <div className="images">
                <img src={p1}></img>
                <img src={p2}></img>
                <img src={p3}></img>
            </div>
        </div>
    )
}

export default Braids;