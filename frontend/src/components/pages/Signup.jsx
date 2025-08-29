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
            ...formdata,
            [name]: value,
        });
    };

    const handlesubmit = async (e)=>{
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/create-account', formdata);
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
                <input type="text" placeholder="Name" name="Name" value={formdata.Name} onChange={handlechange}/><br /><br />
                <input type="email" placeholder="Email" name="Email" value={formdata.Email} onChange={handlechange} /><br /><br />
                <input type="password" placeholder="Password" name="Password" value={formdata.Password} onChange={handlechange} /><br /><br />
    <div className="end">
                <button>Sign up</button>
            </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;