import React from "react";
import "../style/conditioner.css";
import I1 from "../images/1.jpeg";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg"

function Conditioner(){
    return(
        <div>
            <div className="textt1">
                <h1>Leave in conditiner.</h1>
            </div>
            <h1> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid rerum aspernatur quis mollitia quasi eaque expedita, <br />quam at sequi aliquam consectetur, voluptatem impedit sapiente ex labore. Dolorem reiciendis saepe consequuntur?</h1>
            <div className="img1">
            <img src={I1} />
            </div>
            <button className="cart1">
                Add to cart
                </button>

            <button>
                <img src={minus} className="decrease" />
                </button>

            <button className="number">
                0
                </button>

            <button>
                <img src={plus} className="increase" />
                </button>

        </div>
    )
}

export default Conditioner;