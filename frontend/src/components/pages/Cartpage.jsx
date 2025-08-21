import React from "react";
import Cartitem from "./Cartitem";

function Cartpage(props){
    return(
        <div>
            <div>
                <h1>Welcome to your cart.</h1>
                <h1>{props.name}</h1>
            <p>Price:{props.price}</p>
            <p>Quantity:{props.Quantity}</p>
            </div>
        </div>
    )
};

export default Cartpage;