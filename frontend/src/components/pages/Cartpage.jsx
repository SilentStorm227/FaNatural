import React from "react";
import Cartitem from "./Cartitem";
import {useCart} from "./Cartcontext";

function Cartpage(props){
    const {cart} = useCart();
    // console.log("Cart state:", cart);
    console.log(cart);
    return(
        <div>
            <div>
                <h1>Welcome to your cart.</h1>

                {cart.length === 0 && <p>cart is empty</p>}

                {cart.map((item)=>(
                    <div key={item.id}>
                        <p>{item.name} * {item.qty} - £{item.price * item.qty}</p>
                    </div>
                ))}
            </div>

            {cart.length > 0 && (
                <p><Strong>Total:£{cart.reduce((sum, item) => sum + item.price * item.qty, 0)}</Strong></p>
            )}
        </div>
    )
};

export default Cartpage;