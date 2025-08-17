import React from "react";

function AddtoCart(){
    const add = ()=>{
        alert('added')
    };

    return(
        <div>
            <button onClick={add}>Add to cart</button>        
        </div>
    )
};

export default AddtoCart;