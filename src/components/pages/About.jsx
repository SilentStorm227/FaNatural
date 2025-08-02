import React from "react";
import "../style/about.css"
import pic1 from "../images/pic6.jpeg";
import pic3 from "../images/pic5.jpeg";
import pic4 from "../images/pic9.jpeg";
import pic5 from "../images/pic16.jpg";
import pic2 from "../images/pic12.jpeg";

function About() {
    return(
        <div>
            <div className="text">
                <h1>About</h1>
     <p>Welcome to FNatural.<br />
Pure Care for Every Hair Type<br /><br />
FNaturals is your trusted destination for healthy, beautiful hair — offering handcrafted, plant-based haircare products and professional styling services for all hair types and all ages.<br />
Our products are made to nourish the scalp, support hair growth, and enhance natural texture, while our styling services are gentle, neat, and tailored to each client’s needs.</p>
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