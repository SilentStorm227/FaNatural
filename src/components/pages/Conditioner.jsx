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
            </div>
            <button className="cart1">
                Add to cart
                </button>
            <div className="number">
                <h4>-</h4>
            </div>

            <div className="number2">
                {/* <h4>0</h4> */}
            </div>

            <div className="number3">
                {/* <h4>+</h4> */}
            </div>

        </div>
    )
}

export default Conditioner;