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
    const [quantities, setQuantities] = useState({}); // Local state for qty of each product before adding to cart

      // Fetch products from backend API
      useEffect(() => {
        fetch("http://localhost:5000/Conditioner") // call your backend
        .then((res) => res.json())  // convert to JSON
        .then((data) => {
            setproduct(data) // save products in state
                    // initialize quantities to 0
            const initQuantities = {};
            data.forEach((p) =>{
                initQuantities[p._id] = 0;
            });
            setQuantities(initQuantities);
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
                    
                    <div className="qtycontrols">

                    {/* <button className="cart1" onClick={() => addtocart(p)}>Add to cart</button> */}
                    <img src={minus} className="decrease" onClick={() => updateQty(p._id, quantities[p._id] - 1, p.amount)} />

                    <input className="number"
                    value={quantities[p._id] || 0}
                    onChange={(e) => {

                        updateQty(p._id, parseInt(e.target.value) || 0, p.amount)

                    }} />

                    <img src={plus} className="increase" onClick={() => updateQty(p._id, quantities[p.id] + 1, p.amount)} />

                    </div>

                    <button className="cart1" onClick={() => {
                        const qty = quantities[p.id] || 0;
                        if (qty > 0){
                            addtocart({ ...p,qty});
                            alert(`${qty} ${p.name}(s) added to cart`)
                        }else {
                         alert("Please select at least 1 item");
                        }}
                        }>
                            
                            Add to cart</button>
                </div>
            ))}


        </div>
    )
}

export default Conditioner;