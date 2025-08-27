import React from "react";
import {useCart} from "./Cartcontext";
import sad from "../images/sad.png"
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
                    <div key={item.id} className="cartitem">
                        
                            <img src={`/images/${item.image}`} />
                             {item.name}.<br /> <br />
                             Amount:{item.qty}. <br /> <br />
                            Price:{item.price * item.qty}.
                    </div>
                ))}
            </div>

            {cart.length > 0 && (
                <p><strong>Total:£{cart.reduce((sum, item) => sum + item.price * item.qty, 0)}</strong></p>
            )}
            
            <button onClick={makepayment}>Checkout</button>
        </div>
    )
};

export default Cartpage;