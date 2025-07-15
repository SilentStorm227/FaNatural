import React from "react";
import "../style/services.css"

function Services() {
    return(
        <div>
            <div className="text">
                <h1>Services we offer</h1>
                    <p>At FNaturals, we believe every crown deserves intentional care.<br /><br />
Whether you’re wearing braids, wigs, or your natural hair, we bring holistic beauty services to your doorstep <br />  and provide products that truly support healthy growth.</p>
            </div>
       <div className="container-fluid mt-5">
                    <div className="card-body">
                    <div className="Braids"><p className="texts">Braids</p></div>
                    <div className="Wig"><p className="texts">Wig care</p></div>
                    <div className="Scalpandhair"><p className="texts">Scalp and hair treatment</p></div>
                    <div className="Hairproducts"><p className="texts">Hair products</p></div>
                </div>
            </div>
        </div>
    )
};

export default Services;