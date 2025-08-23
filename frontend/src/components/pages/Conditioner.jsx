import {useEffect, useState} from "react";
import "../style/conditioner.css"
import {useCart} from "./Cartcontext";
// import I1 from "../images/1.jpeg";
// import minus from "../images/minus.svg";
// import plus from "../images/plus.svg"

function Conditioner(){
    // const add = ()=>{
    //     alert('added')
    // };

    const {addtocart} = useCart(); //cart function
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
              {/* Loop through products from DB */}
            {/* <div className="textt1">
                <h1>Leave-in conditioner</h1>
            </div> */}

      {loading && <p>Loading products...</p>}

            {product.map((p)=> (
                <div key={p._id} className="product">
                    <h1>{p.name}</h1>
                    <p>£{p.price}</p>
                    <p>{p.amount}</p>
                    <button onClick={() => addtocart(p)}>Add to cart</button>
                </div>
            ))}
            {/* <p><img className="img" src={I1} /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Aliquid rerum aspernatur quis mollitia quasi eaque expedita, <br />quam at sequi aliquam consectetur, voluptatem impedit sapiente ex <br />labore. Dolorem reiciendis saepe consequuntur? </p>
            <button className="cart2" onClick={add}>Add to cart</button>
            
                <img src={minus} className="decrease2" />

                <input className="number2" defaultValue={0}/>

                <img src={plus} className="increase2" /> */}

        </div>
    )
}

export default Conditioner;