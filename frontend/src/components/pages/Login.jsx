import React from "react";
import "../style/login.css"

function Login(){
    return(
        <div>
            <div className="toptext">
                <h1>Login</h1>
            </div>

            <div className="content">
                <input type="text" placeholder="Name"/><br /><br />
                <input type="password" placeholder="Password"/><br /><br />
            </div>
            <div className="end">
                <button>Login</button>
            </div>
        </div>
    )
};

export default Login;