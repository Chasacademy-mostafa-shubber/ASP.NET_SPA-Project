import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ActiveUser = () => {
   
    const [data, setData] = useState([]);
 
    const fetchData = async () => {
        try {
            const response = await axios.get("https://localhost:7187/api/Account/Active-User");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

 
    useEffect(() => {
        fetchData();
    }, []);

    const [page, setPage] = React.useState(false);

    if (page) {
        return <Navigate to="/logoutpage" />;
    }


    const userFilter = data.filter((item) => item.active === true);
    
  

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your forum post API
            await axios.post('https://localhost:7187/api/Account/User-Logout');
            setPage(true)




            
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

   
   
    return (


        <>
            {userFilter.length > 0 ? (

                <>

                    <div>
                       
                        
                        <h5>
                            <Link to="/game">Game | </Link> 
                            <Link to="/highscore">High score | </Link><Link to="/userprofile">Profile</Link>
                        </h5>
                        <p>-----------------------------------------------</p>

                </div>

                  <form onSubmit={handleSubmit}>
                        <button type="submit">Log out</button>
                    </form>
                  </>

            ) : (

                    <h1>You must login first</h1>

            )}

        </>
   
        
          
            
        )
    

  
   
};

export default ActiveUser;