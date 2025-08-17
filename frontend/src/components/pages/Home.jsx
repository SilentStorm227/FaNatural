import React from "react";
import "../style/home.css"
import Slideshow from "./Slideshow";

function Home(){
    return(
        <div>
            <div className="toptext">
            <h1>FaNaturals</h1>
            </div>            

        <Slideshow />
        
        <h3 className="description">Welcome to FNaturals — a space dedicated to healthy hair, protective styling, and intentional care.<br /> <br />
We provide mobile and home-based braiding services, detailed wig care, scalp and hair treatments, and handcrafted products made to nourish, strengthen, and support natural hair.<br /> Whether you're getting styled, treating your scalp, or shopping for haircare essentials, FNaturals brings quality, comfort, and creativity right to you. <br />Every service is done with clean techniques, professional care, and a passion for helping you feel confident in every strand.</h3>
        </div>
    )
}

export default Home;