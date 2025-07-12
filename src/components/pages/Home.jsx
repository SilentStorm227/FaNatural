import React, {useState, useEffect} from "react";
import pic1 from "../images/pic1.jpeg"
import pic2 from "../images/pic2.jpeg"
import "../style/home.css"

function Home(){
    return(
        <div>
            <div className="toptext">
            <h1>FaNaturals</h1>
            </div>
            {/* <div className="container-fluid mt5">
                <div className="card-body"> */}
            <img src={pic1} className="card"/>
            <img src={pic2} className="card"/>
            {/* <img src={pic2} className="card"/>
            <img src={pic2} className="card"/>
            <img src={pic2} className="card"/>
            <img src={pic2} className="card"/>
            <img src={pic2} className="card"/>
            <img src={pic2} className="card"/>
            <img src={pic2} className="card"/>
            <img src={pic2} className="card"/>
            <img src={pic2} className="card"/>
            <img src={pic2} className="card"/> */}
                {/* </div>
            </div> */}
        <p className="description">Welcome to FNaturals — a space dedicated to healthy hair, protective styling, and intentional care.<br /> <br />
We provide mobile and home-based braiding services, detailed wig care, scalp and hair treatments, and handcrafted products made to nourish, strengthen, and support natural hair.<br /> Whether you're getting styled, treating your scalp, or shopping for haircare essentials, FNaturals brings quality, comfort, and creativity right to you. <br />Every service is done with clean techniques, professional care, and a passion for helping you feel confident in every strand.</p>
        </div>
    )
}

export default Home;