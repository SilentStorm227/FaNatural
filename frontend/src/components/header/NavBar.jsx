import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import "../style/navbar.css";
import cart from "../images/cart.svg";

function NavBar(){
    return(
        <div>
            <nav className="nav">
                <div className="header">
                    <Link to='/' className="left">
                    <button className="b1">Hair</button>
                        </Link>

                    <Link to='/about' className="left">
                    <button className="b1">About</button>
                    </Link>
                    
                    <Link to='/services' className="left">
                    <button className="b1">Services</button>
                    </Link>

                    <Link to='/appointments' className="left">
                    <button className="b1">Appointments</button>
                    </Link>

                    <Link to='/store' className="left">
                    <button className="b1">Store</button>
                    </Link>
                    
                    <Link to='/Signup' className="right">
                    <button className="b1">Sign up</button>
                    </Link>

                    <Link to='/Login' className="right">
                    <button className="b1">Login</button>
                    </Link>

                    <Link to='/cart'><img src={cart} className="cart"/></Link>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;