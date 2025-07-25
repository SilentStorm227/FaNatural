import React from "react";
import "../style/signup.css"

function Signup(){
    return(
        <div>
            <div className="toptext">
                <h1>Sign Up</h1>
            </div>
            
            <div className="content">
                <input type="text" placeholder="Name"/><br /><br />
                <input type="password" placeholder="Password"/><br /><br />
                <input type="email" placeholder="Email"/><br /><br />
            </div>
            <div className="end">
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Signup;