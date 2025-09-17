import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "../style/profile.css"

const Profile = ()=>{
    const [profile, setprofile] = useState(null);
    const [error, setError] = useState(null);

    const profileupload = () => {
        const [file, setFile] = useState(null);

        const handlechange = (e) =>{
            setFile(e.target.file[0]);
        };

        const handleupload = async ()=>{
            if (!file) return alert('Select a file first!!');
            const formData = new formData();
            formData.append('profilePic', file);

            try {
                const token = localStorage.getItem('token');
                const res = await axios.post('http://localhost:5000/upload-profile', formData, {
                    header:{
                        'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
                    },
                });
                alert('uploaded succesfully!!');
                      console.log(res.data);
            } catch (error) {
                console.error(err);
      alert('Error uploading');
            }
        };
    }

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
            {profile.profilePic &&(
                <img src={`http://localhost:5000/${profile.profilePic}`}
                lt="Profile"
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />
            )}
            <input type='file' accept='image/*' onChange={handlechange} />
            <button onClick={handleupload}>Upload picture</button>
            <h1 className='ttex1t'>Profile</h1><br /><br />
            <p className='thetext' ><strong>Name:</strong> {profile.Name}</p>
            <p className='thetext'><strong>Email:</strong> {profile.Email}</p>
        </div>
    )
}

export default Profile;