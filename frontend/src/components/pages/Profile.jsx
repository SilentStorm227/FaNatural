import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "../style/profile.css"

const Profile = ()=>{
    const [profile, setprofile] = useState(null);
        const [error, setError] = useState(null);

        useEffect(()=>{
            const fetchprofile = async ()=>{
                try {
                    const token = localStorage.getItem('token');

                    if(!token){
                        setError('No token found. Please login');
                    return;
                    }

                    const response = await axios.get('http://localhost:5000/profile-page',{
                        headers:{
                            Authorization: `Bearer ${token}`
                        },
                    });

                    setprofile(response.data.profile)
                } catch (error) {
                    setError('Error fetching profile data');
                console.error('Error fetching data', error)
                }
            };
            fetchprofile();
        },[])
        if(error){
            return(
                <div>{error}</div>
            )
        };

        if(!profile){
            return(
                <div>Loading..............</div>
            )
        }

        
    return(
        <div>
            <h1 className='ttex1t'>Profile</h1><br /><br />
            <p className='thetext' ><strong>Name:</strong> {profile.Name}</p>
            <p className='thetext'><strong>Email:</strong> {profile.Email}</p>
        </div>
    )
}

export default Profile;