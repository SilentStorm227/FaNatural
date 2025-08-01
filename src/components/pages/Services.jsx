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
                        <Link to="./braids" className="B1">
                    <button className="texts2">Braids</button>
                    </Link>

                        <Link to="./wigcare" className="B1">
                    <button className="texts2">Wig <br />care</button>
                    </Link>

                        <Link to="./Scalp-and-hair-treatment" className="B1">
                    <button className="texts2">Scalp and <br />hair treatment</button>
                    </Link>

                        <Link to="./products" className="B1">
                    <button className="texts2">Hair <br />products</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Services;