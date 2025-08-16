import React from "react";
import "../style/prewashoil.css"
import I1 from "../images/5.jpeg";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg"

function PrewashOil(){
    return(
        <div>
            <div className="textt1">
                <h1>Hair conditioner</h1>
            </div>

            <p><img className="img" src={I1} /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Aliquid rerum aspernatur quis mollitia quasi eaque expedita, <br />quam at sequi aliquam consectetur, voluptatem impedit sapiente ex <br />labore. Dolorem reiciendis saepe consequuntur? </p>
             <button className="cart1">
                Add to cart
                </button>

                <img src={minus} className="decrease" />

                <input className="number" defaultValue={0}/>

                <img src={plus} className="increase" />

        </div>
    )
}

export default PrewashOil;