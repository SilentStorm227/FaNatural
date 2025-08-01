import React from "react";
import "../style/products.css"

function Wigcare(){
    return(
        <div>
            <div className="top">
                <h1>Haircare Products</h1>
                <p>Handcrafted with care to nourish, protect, and grow your natural hair.</p>
            </div>
            <div className="service">
                <h2>Available Products:Pre-poo treatments </h2>
                <ul>
                <li>Shampoo</li>
                <li>* Rinse-Off Conditioner</li>
                <li>Leave-In Conditioner</li>
                <li>Hair Serum</li>
                <li>Ayurvedic Hair Growth Oil</li>
                </ul>
            </div>
            <h1>Images Available at store</h1>
            <button>Store</button>
        </div>
    )
}

export default Wigcare;