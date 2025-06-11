import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "../home/Home";

function NavBar(){
    return(
        <div>
            <nav className="nav">
                <div className="header">
                    <Link to='/'>Hair</Link>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;