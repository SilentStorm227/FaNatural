import {useEffect, useState} from "react";
import "../style/conditioner.css"
import {useCart} from "./Cartcontext";
import I1 from "../images/1.jpeg";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg"

function Conditioner(){
     
    const {cart} = useCart(); //cart function
    const {addtocart} = useCart(); //cart function
    const {increaseQty} = useCart(); //cart function
    const {decreaseQty} = useCart(); //cart function
    const {getQty} = useCart(); //cart function
    const [product, setproduct] = useState([]); // state for products from DB
    const [loading, setloading] = useState(true); // loading state

      // Fetch products from backend API
      useEffect(() => {
        fetch("http://localhost:5000/Conditioner") // call your backend
        .then((res) => res.json())  // convert to JSON
        .then((data) => {
            setproduct(data) // save products in state
            setloading(false) // turn off loader
        })
        .catch((err) =>{
            console.error('Error  fetching product:', err);
            setloading(false);
        });
      }, []);

    return(
        <div>
            {/* Show loading message */}
      {loading && <p>Loading products...</p>}

              {/* Loop through products from DB */}
                <h1 className="text0">Leave-in conditioner</h1>
             <p><img className="img" src={I1} /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Aliquid rerum aspernatur quis mollitia quasi eaque expedita, <br />quam at sequi aliquam consectetur, voluptatem impedit sapiente ex <br />labore. Dolorem reiciendis saepe consequuntur? </p>

            {product.map((p)=> (
                <div key={p._id} className="product">
                    <p>Price:£{p.price}</p>
                    <p>Amount:{p.amount}</p>
                    
                              {/* If product not yet in cart, show Add button */}
                    {getQty(p._id) === 0 ? (
                    <button className="cart1" onClick={() => addtocart({...p, id: p._id })}>Add to cart</button>
                    ) : (
                                    // If product is in cart, show quantity controls
                    <div className="qtycontrols">

                    <button className="cart1" onClick={() => addtocart(p)}>Add to cart</button>
                    <img src={minus} className="decrease" onClick={() => decreaseQty(p._id)} />

                    <input className="number" value={getQty(p._id)} onChange={(e) => {
                        const newQty = parseInt(e.target.value) || 0;
                        if (newQty > getQty(p._id)) {
                            increaseQty(p._id);
                        } else if (newQty < getQty(p._id)){
                            decreaseQty(p._id);
                        }
                    }} />

                    <img src={plus} className="increase" onClick={() => increaseQty(p._id)} />

                    </div>
                    )}

                </div>
            ))}


        </div>
    )
}

export default Conditioner;