import React from "react";
import Cartitem from "./Cartitem";
import {useCart} from "./Cartcontext";

function Cartpage(props){
    const {cart} = useCart();
    return(
        <div>
            <div>
                <h1>Welcome to your cart.</h1>
                {cart.length === 0 && <p>cart is empty</p>}
                {cart.map((item)=>{
                    <div key={item.id}>
                        <p>{item.name} * {item.qty} - £{item.price}</p>
                    </div>
                })}
            </div>
        </div>
    )
};

export default Cartpage;