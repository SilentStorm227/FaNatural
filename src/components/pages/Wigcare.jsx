import React from "react";
import "../style/wig.css"
import p1 from "../images/wig1.jpg"
import p2 from "../images/wig2.jpg"
import p3 from "../images/wig3.webp"
import p4 from "../images/wig4.webp"

function Wigcare(){
    return(
        <div>
            <div className="top">
                <h1>Wig care</h1>
                <p>We revive, refresh, and protect your wigs with care rooted in natural values.</p>
            </div>
            <div className="service">
                <h2>Services</h2>
                <ul>
                    <li>Wig Sewing</li>
                    <li>Wig Laundry & Deep Cleansing</li>
                    <li>Wig Revamps (Restyling, Repair & Tightening)</li>
                    <li>Wig Sales (Pre-Order Only)</li>
                </ul>
            </div>
            <div className="box">
                <img src={p1}></img>
                <img src={p2}></img>
                <img src={p3}></img>
                <img src={p4}></img>
            </div>
        </div>
    )
}

export default Wigcare;