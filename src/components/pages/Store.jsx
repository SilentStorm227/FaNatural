import { Link } from "react-router-dom";
import "../style/store.css"
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";

function Store(){
    return(
        <div>
            <div className="toptext">
            <h1>FaNaturals</h1>
            </div>
            
            <div className="container-fluid mt-5">
                <div className="card-body">




                        <Link to="/Leave-in-conditioner">
                        <img src={img1}  className="image1"/>
                        </Link>
                        <span>
                        <p className="p1">Leave-in Conditioner</p>
                        </span>

            <img src={img2}  className="image1"/>
                    <span>
            <p className="p1"> Herbal Bloom Cleansing Shampoo</p>
                    </span>
            <img src={img3}  className="image2"/>

            <span>
            <p className="p2">Deep and Intensive Hair Conditioner</p>
            </span>

            <img src={img4}  className="image2"/>
            <span>
            <p className="p2">GrowThrive Oil</p>
            </span>

            <img src={img5}  className="image3"/>
            <span>
            <p className="p3">Pre-wash Hair Treatment Oil</p>
            </span>


                </div>
            </div>

        </div>
    )
}

export default Store;