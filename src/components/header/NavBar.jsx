import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import "../style/navbar.css";
import Home from "../home/Home";
import cart from "../images/cart.svg";

function NavBar(){
    return(
        <div>
            <nav className="nav">
                <div className="header">
                    <Link to='/'>Hair</Link>
                    <Link to='/Signup' className="signup">Sign up</Link>
                    <Link to='/Login' className="login">Login</Link>
                    <Link to='/cart'><img src={cart} className="cart"/></Link>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;