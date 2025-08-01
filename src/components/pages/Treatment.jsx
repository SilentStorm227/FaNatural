import React from "react";
import "../style/treatment.css"
import p1 from "../images/pic8.jpeg"
import p2 from "../images/pic9.jpeg"
import p3 from "../images/pic10.jpeg"
import p4 from "../images/pic13.jpeg"

function Treatment(){
    return(
        <div>
            <div className="top">
                <h1> Scalp & Hair Treatments</h1>
                <p>We focus on restoring and preparing your scalp and hair before protective styles.</p>
            </div>
            <div className="service">
                <h2>Treatments Include:</h2>
                <ul>
                    <li>Scalp Detox</li>
                    <li>Deep Hydration Therapy</li>
                    <li>Protective Style Prep</li>
                    <li>Herbal Oil Blends & Hydration Sprays</li>
                    <li>Gentle, Natural-Based Haircare Routines</li>
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

export default Treatment;