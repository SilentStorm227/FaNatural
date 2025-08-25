import {useEffect, useState} from "react";
import "../style/conditioner.css"
import {useCart} from "./Cartcontext";
import I1 from "../images/1.jpeg";
// import minus from "../images/minus.svg";
// import plus from "../images/plus.svg"

function Conditioner(){
     
    const {cart} = useCart(); //cart function
    const {addtocart} = useCart(); //cart function
    const {increaseQty} = useCart(); //cart function
    const {decreaseQty} = useCart(); //cart function
    const [product, setproduct] = useState([]); // state for products from DB
    const [loading, setloading] = useState(true); // loading state
    const [quantities, setQuantities] = useState({}); // Local state for qty of each product before adding to cart

      // Fetch products from backend API
      useEffect(() => {
        fetch("http://localhost:5000/Conditioner") // call your backend
        .then((res) => res.json())  // convert to JSON
        .then((data) => {
            setproduct(data) // save products in state
            setloading(false) // turn off loader

                    // Initialize quantities to 1
         const initialQualitities = {};
        data.forEach((p) => {initialQualitities[p._id] = 1 });
        setQuantities(initialQualitities);

        })
        .catch((err) =>{
            console.error('Error  fetching product:', err);
            setloading(false);
        });
      }, []);

   // Handle Add to Cart
    const handleaddtocart = (product) =>{
      addtocart({ ...product, qty: quantities[product._id]});
      alert(`${product.name} added to cart`);
    };


    return(
        <div>
            {/* Show loading message */}
      {loading && <p>Loading products...</p>}

              {/* Loop through products from DB */}
                <h1 className="text0">Leave-in conditioner</h1>

             <p><img className="img" src={I1} /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Aliquid rerum aspernatur quis mollitia quasi eaque expedita, <br />quam at sequi aliquam consectetur, voluptatem impedit sapiente ex <br />labore. Dolorem reiciendis saepe consequuntur? </p>

            {product.map((product)=> (
                <div key={product._id} className="product">

                    <p>Price:£{product.price}</p>

                    <p>Amount:{product.amount}</p>
                    
                     <button className="cart1" onClick={() => handleaddtocart(product)}>Add to cart</button> 


                    <button className="controls" onClick={() => setQuantities(prev =>({
                        ...prev,
                        [product._id]: Math.max(prev[product._id] - 1, 1) 
                    }))}>-</button>                           

                    <input className="controls" value={quantities[product._id]} readOnly />

                    <button className="controls" onClick={() => setQuantities(prev =>({
                        ...prev,
                        [product._id]: Math.min(prev[product._id] + 1, product.amount) 
                    }))}>+</button>                           



                </div>
            ))}


        </div>
    )
}

export default Conditioner;