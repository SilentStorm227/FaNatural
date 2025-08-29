import React, { useState } from "react";
import axios from "axios";
import "../style/login.css";


const Login = ()=>{
    const [formdata, setformdata] = useState({
        Username:'',
        Password:''
    });
const handlechange = (e)=>{
        const {name , value} = e.target
        setformdata({
            ...formdata,
            [name]:value,
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log("Form data on submit:", formdata);
        try {
            const response = await axios.post('http://localhost:5000/login', formdata);
            const { token } = response.data;
            localStorage.setItem('token', response.data.token) // Store JWT in local storage

            alert('Login sucessfully!! ---------->  Welcome back')
            console.log(response.data)
        } catch (error) {
            console.error('error loggoing in:', error)
            if (error.response) {
                alert(error.response.data.message || 'invalid username or password')
            }
            alert('Invalid username or password')
        }
    };



    return(
        <div>
            <div className="toptext">
                <h1>Login</h1>
            </div>

            <div className="content">
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="Name" value={formdata.Name} onChange={handlechange}/><br /><br />
                <input type="password" placeholder="Password" name="Password" value={formdata.Password} onChange={handlechange} /><br /><br />
                    
            <div className="end">
                <button>Login</button>
            </div>
                </form>
            </div>
        </div>
    )
};

export default Login;