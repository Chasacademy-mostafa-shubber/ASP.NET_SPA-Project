import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
const UserHighScore = () => {
    
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://localhost:7187/api/User/User-HighScore");
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
           
            <h2>Your score</h2>
            <ul>
                {data.map((post) => (
                    <h2>{post.score}</h2>
                ))}
            </ul>
        </div>
    );
};

export default UserHighScore;