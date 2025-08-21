import React from "react";
import Cartpage from "./Cartpage";

function Cartitem(item){
    return(
        <div>
            <Cartitem name="Laptop" price={999} quantity={1} />
            <Cartitem name="Head-Phone" price={199} quantity={2} />
            <Cartitem name="Mouse" price={50} quantity={5} />
        </div>
    )
}