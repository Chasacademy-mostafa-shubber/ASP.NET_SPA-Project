import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Game = () => {

    const [data, setData] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
             
                const response = await axios.get("https://localhost:7187/api/Game/Active-Game");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    var gameFilter = data.filter((item) => item.activeGame === true);
  


    const handleStart = async (e) => {
        e.preventDefault();

        try {
          
            await axios.post('https://localhost:7187/api/Game/Start-Game');
           

        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    const handlePlay = async (e) => {
        e.preventDefault();

        try {
           
            await axios.post('https://localhost:7187/api/Game/play');


        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    function refreshPage() {
        window.location.reload();
    }

    return (

        <>
            <h5>
                <Link to="/activeuser">User site | </Link><Link to="/game">Game | </Link>
                <Link to="/highscore">High score | </Link><Link to="/userprofile">Profile</Link>
            </h5>
            <p>-----------------------------------------------</p>

            {gameFilter.length > 0 ? (
                
                <div>

                    <form onSubmit={handlePlay} onClick={refreshPage}>
                        <button type="submit">Throw random number</button>
                    </form>

                    {gameFilter.map((post) => (
                        <div>
                            <h3>Player points: {post.playerPoint} | Computer points: {post.computerPoint}</h3>
                            <h3>Chances left: {post.chances}</h3>
                        </div>
                    ))}

                    
              </div>

            ) : (
               
               
                <form onSubmit={handleStart} onClick={refreshPage}>
                        <button type="submit">Start new game</button>
                        
                    </form>
                    
                     

            )}

        </>
    );
};

export default Game;