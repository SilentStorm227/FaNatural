import React from "react";
import "../style/about.css"
import pic1 from "../images/pic1.jpeg";
import pic3 from "../images/pic1.jpeg";
import pic4 from "../images/pic2.jpeg";
import pic5 from "../images/pic2.jpeg";
import pic2 from "../images/pic2.jpeg";

function About() {
    return(
        <div>
            <div className="text">
                <h1>About</h1>
            <h3>At FNaturals, we believe every crown deserves intentional care.<br />
Whether you’re wearing braids, wigs, or your natural hair, we bring holistic beauty services to your doorstep <br />  and provide products that truly support healthy growth.</h3>
        </div>
        <div className="container-fluid mt-5">
            <div className="card-body">
                <img src={pic1} />
                <img src={pic2} />
                <img src={pic3} />
                <img src={pic4} />
                <img src={pic5} />
            </div>
        </div>
            </div>
    )
};

export default About;