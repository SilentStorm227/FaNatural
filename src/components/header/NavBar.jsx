import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import "../style/navbar.css";
import cart from "../images/cart.svg";

function NavBar(){
    return(
        <div>
            <nav className="nav">
                <div className="header">
                    <Link to='/' className="left">Hair</Link>
                    <Link to='/about' className="left">About</Link>
                    <Link to='/hairstyles' className="left">HairStyles</Link>
                    <Link to='/appointments' className="left">Appointments</Link>
                    <Link to='/store' className="left">Store</Link>
                    
                    <Link to='/Signup' className="right">Sign up</Link>
                    <Link to='/Login' className="right">Login</Link>
                    <Link to='/cart'><img src={cart} className="cart"/></Link>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;