import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName :'',
        userName: '',
        password: '',
      
        // Add more fields as needed
    });
    const [goToPage, setGoToPage] = React.useState(false);

    if (goToPage) {
        return <Navigate to="/registerconfirm" />;
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your forum post API
            await axios.post('https://localhost:7187/api/Account/register', formData);
            setGoToPage(true);
          

            console.log('Created successfully!');
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    return (
        <>
        <h2>Create new user</h2>
        <form onSubmit={handleSubmit}>

            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" /> <br></br>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" /> <br></br>
            <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Username" /> <br></br>
            <input type="text" name="password" value={formData.password} onChange={handleChange} placeholder="Password" /> <br></br>
           <button type="submit">Register</button>
        </form>
                
            </>    
                
     );
};              
           
export default Register;
            
             
          

          

          

       


