import React from "react";
import "../style/braids.css"
import p1 from "../images/pic3.jpg"
import p2 from "../images/pic4.jpeg"
import p3 from "../images/pic5.jpeg"
import p4 from "../images/pic6.jpeg"
import p5 from "../images/pic7.jpeg"
import p6 from "../images/pic8.jpeg"
import p7 from "../images/pic9.jpeg"
import p8 from "../images/pic10.jpeg"
import p9 from "../images/pic11.jpeg"
import p10 from "../images/pic12.jpeg"
import p11 from "../images/pic13.jpeg"
import p12 from "../images/pic14.jpeg"

function Braids(){
    return(
        <div>
            <div className="top">
                <h1>Braids</h1>
                <p>I am a mobile and home-based braider. I offer clean, protective, and professional styling services for all ages.</p>
            </div>
            <div className="service">
                <h2>Services</h2>
                <ul>
                    <li>Knotless Braids</li>
                    <li>Box Braids</li>
                    <li>Stitch Braids</li>
                    <li>Cornrows</li>
                    <li>African Hair Threading</li>
                    <li>Pre-Parting Services</li>
                    <li>Hair Wash, Blow-Dry & Styling</li>
                </ul>
            </div>
            <div className="images">
                <img src={p1}></img>
                <img src={p2}></img>
                <img src={p3}></img>
                <img src={p4}></img>
                <img src={p5}></img>
                <img src={p6}></img>
                <img src={p7}></img>
                <img src={p8}></img>
                <img src={p9}></img>
                <img src={p10}></img>
                <img src={p11}></img>
                <img src={p12}></img>
            </div>
        </div>
    )
}

export default Braids;