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

            <p><img className="img" src={I1} /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Aliquid rerum aspernatur quis mollitia quasi eaque expedita, <br />quam at sequi aliquam consectetur, voluptatem impedit sapiente ex <br />labore. Dolorem reiciendis saepe consequuntur? </p>
             <button className="cart1">
                Add to cart
                </button>

            <button>
                <img src={minus} className="decrease" />
                </button>

                <input className="number" defaultValue={0}/>

            <button>
                <img src={plus} className="increase" />
                </button>

        </div>
    )
}

export default Conditioner;