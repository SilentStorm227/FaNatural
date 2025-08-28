import {useEffect, useState} from "react";
import {useCart} from "./Cartcontext";
import sad from "../images/sad.png"
import "../style/cartpage.css";
import { loadStripe } from "@stripe/stripe-js"; 

const apiUrl = "http://localhost:5000"; // your backend


function Cartpage(props){
    const {cart} = useCart();

 const makepayment = async () => {
    const stripe = await loadStripe("pk_test_51S0eJfGc4BhCd61yU6rZKKDEwTZPzvSMPAXpkZjRMvu9535TQ1tnMVmJiofZhzjZ43vEFpEEUrbWKveVSUtaM0Jt00QXJJ2giD")

    const body = {
      product: cart
    }

    const headers = {
      "Content-type":"application/json"
    }

    const responce =
      await fetch(`${apiUrl}/create-checkout-session`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({product:cart})
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
                             Amount:{item.qty}. <br /> <br />
                            Price:{item.price * item.qty}.

                    </div>


                ))}
            </div>
                <div key={product._id} className="product">
                    <button className="controls" onClick={() => setQuantities(prev =>({
                        ...prev,
                        [product._id]: Math.max(prev[product._id] - 1, 1) 
                    }))}>-</button>                           

                    <input className="controls2" value={quantities[product._id]} readOnly />

                    <button className="controls" onClick={() => setQuantities(prev =>({
                        ...prev,
                        [product._id]: Math.min(prev[product._id] + 1, product.amount) 
                    }))}>+</button>                           

                  </div>

            {cart.length > 0 && (
                <p><strong>Total:£{cart.reduce((sum, item) => sum + item.price * item.qty, 0)}</strong></p>
            )}
            
            {cart.length > 0 && (
            <button className="checkout" onClick={makepayment}>Checkout</button>
            )}
        </div>
    )
};

export default Cartpage;