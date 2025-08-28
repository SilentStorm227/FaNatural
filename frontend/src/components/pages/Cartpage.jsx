import {useEffect, useState} from "react";
import {useCart} from "./Cartcontext";
import sad from "../images/sad.png"
import "../style/cartpage.css";
import { loadStripe } from "@stripe/stripe-js"; 
import bin from "../images/bin.svg"

const apiUrl = "http://localhost:5000"; // your backend


function Cartpage(props){
    const {cart} = useCart();
    const { removefromCart } = useCart();



 const makepayment = async () => {
    const stripe = await loadStripe("pk_test_51S0eJfGc4BhCd61yU6rZKKDEwTZPzvSMPAXpkZjRMvu9535TQ1tnMVmJiofZhzjZ43vEFpEEUrbWKveVSUtaM0Jt00QXJJ2giD")

    const body = {
      product: cart
    }

    const headers = {
      "Content-type":"application/json"
    }

    const updatequantity = cart.map((item) =>({
      ...item,
      qty: quantities[item.id] ?? item.qty
    }));

    const responce =
      await fetch(`${apiUrl}/create-checkout-session`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({product:updatequantity})
      });

      const session = await responce.json();
          console.log("Stripe session:", session);

      const result = stripe.redirectToCheckout({
        sessionId:session.id
      });

      if(result.error){
        console.log(result.error)
      }
  }

    const [quantities, setQuantities] = useState({}); // Local state for qty of each product before adding to cart


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
                            Price:{item.price * item.qty}.

                    <div className="stylecontrols">

                    <button className="controls0" onClick={() => setQuantities(prev =>({
                        ...prev,
                        [item.id]: Math.max((prev[item.id] ?? item.qty) - 1, 1) 
                    }))}>-</button>                           

                    <input className="controls1" value={quantities[item.id] ?? item.qty} readOnly /> {/* default to item.qty readOnly */}

                    <button className="controls01" onClick={() => setQuantities(prev =>({
                        ...prev,
                        [item.id]: Math.min((prev[item.id] ?? item.qty) + 1, item.amount) 
                    }))}>+</button>                           
                    </div>

                        <div className="bin">
                    <img src={bin} onClick={() => removefromCart(item.id)} />
                        </div>
                    </div>
                ))}
            </div>

            {cart.length > 0 && (
                <p><strong>Total:£{cart.reduce((sum, item) => sum + item.price * (quantities[item.id] ?? item.qty), 0)}</strong></p>
            )}
            
            {cart.length > 0 && (
            <button className="checkout" onClick={makepayment}>Checkout</button>
            )}
        </div>
    )
};

export default Cartpage;