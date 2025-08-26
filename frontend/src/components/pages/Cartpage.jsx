import React from "react";
import {useCart} from "./Cartcontext";
import sad from "../images/sadflower.png"
import "../style/cartpage.css";

function Cartpage(props){
    const {cart} = useCart();
    // console.log("Cart state:", cart);
    console.log(cart);
    return(
        <div>
            <div>
                <h1 className="carttoptext">Welcome to your cart.</h1>

                {cart.length === 0 && <p className="carttoptext" >
                    <img src={sad} /> <br />
                    cart is empty
                    </p>}

                {cart.map((item)=>(
                    <div key={item.id}>
                        <img src={`/images/${item.image}`} />
                        <p>{item.name}.   Amount:{item.qty}. Price:{item.price * item.qty}.</p>
                    </div>
                ))}
            </div>

            {cart.length > 0 && (
                <p><strong>Total:£{cart.reduce((sum, item) => sum + item.price * item.qty, 0)}</strong></p>
            )}
        </div>
    )
};

export default Cartpage;