import { Link } from "react-router-dom";
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
                        <Link to="./braids" className="Braids">
                    <p className="texts2">Braids</p>
                    </Link>

                        <Link to="./wigcare" className="Wig">
                    <p className="texts2">Wig care</p>
                    </Link>

                        <Link to="./Scalp-and-hair-treatment" className="Scalpandhair">
                    <p className="texts2">Scalp and hair treatment</p>
                    </Link>

                    <div className="Hairproducts"><p className="texts">Hair products</p></div>
                        <Link to="./products" className="Hairproducts">
                    <p className="texts">Hair products</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Services;