import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const UserProfile = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://localhost:7187/api/User/User-Profile");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h5>
                <Link to="/activeuser">User site | </Link><Link to="/game">Game | </Link>
                <Link to="/highscore">High score | </Link><Link to="/userprofile">Profile</Link>
            </h5>
            <p>-----------------------------------------------</p>
         
            
                {data.map((post) => (
                    <>
                        <h2>Won: {post.won}</h2>
                        <h2>Played: {post.played}</h2>
                        <h2>Lost: {post.lost}</h2>
                     </>
                ))}
            
        </div>
    );
};

export default UserProfile;