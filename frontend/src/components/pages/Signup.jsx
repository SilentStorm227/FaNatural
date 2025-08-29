import React, {useState} from "react";
import axios from 'axios';
import "../style/signup.css"

const Signup = ()=>{

    const [formdata, setformdata] = useState({
        Name:'',
        Email:'',
        Password:''
    });

    const handlechange = (e)=>{
        const {name, value} = e.target
        setformdata({
            ...FormData,
            [name]: value,
        });
    };

    const handlesubmit = async (e)=>{
        e.preventdefault();

        try {
            const response = await axios.post('http://localhost:5000/create-account', FormData);
            alert('Account created sucessfully!!')
        } catch (error) {
            if (error.response) {
                console.error('error creating account:', error.response.data);
            }
            else{
                console.error('error creating account:', error.message);
            }
            alert('error creating account');
        }
    }

    return(
        <div>
            <div className="toptext">
                <h1>Sign Up</h1>
            </div>
            
            <div className="content">
                <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Name" value={formdata.Name} onChange={handlechange}/><br /><br />
                <input type="email" placeholder="Email" value={formdata.Email} onChange={handlechange} /><br /><br />
                <input type="password" placeholder="Password" value={formdata.Password} onChange={handlechange} /><br /><br />
                </form>
            </div>
            <div className="end">
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Signup;