import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Navigate } from 'react-router-dom';



const Login = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get("https://localhost:7187/api/Account/Active-User");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: '',

    });

  
    const [goToPage, setGoToPage] = React.useState(false);
    if (goToPage) {
        return <Navigate to="/activeuser" />;
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
          
          const response =  await axios.post('https://localhost:7187/api/Account/User-Login', formData);
            setGoToPage(true);
            console.log('User loged in', response.data);
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    var userFilter = data.filter((item) => item.active === true);

    return (

        <>
            {userFilter.length === 0 ? (
            
              
                <div>
                    <h1>Log in</h1><br></br>
                    <form onSubmit={handleSubmit}>
                        <label>
                            User name:
                            <br></br>
                            <input
                                type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Password:
                            <br></br>
                            <input
                                type="text"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </label>





                        <button type="submit">Log in</button>

                    </form>
                </div> 

            ) : (

                    <h2>You are active</h2>
            )
        }
             </>        
    );
};

export default Login;