import React from "react";
import "../style/conditioner.css"
import I1 from "../images/1.jpeg"
import cart from "../images/addtocart.svg"

function Conditioner(){
    return(
        <div>
            <div className="textt1">
                <h1>Leave in conditiner.</h1>
            </div>
            <div className="img1">
            <img src={I1} />
            <div className="number">
            </div>

            <div className="number">
            </div>

            <div className="number">
            </div>

            </div>
            <button className="cart1">
                Add to cart
                </button>
        </div>
    )
}

export default Conditioner;